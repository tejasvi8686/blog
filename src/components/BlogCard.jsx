import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BlogCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-400 p-2">
      <Link to={`/createblog/newpost/blogGrid/blogDetail/${post.id}`}>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-36 object-cover rounded-lg"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 font-semibold">{post.category}</p>
          <p className="text-gray-500 font-bold">{post.location}</p>
        </div>
      </Link>
      <div className="flex justify-end mt-2">
        <button
          onClick={() => onEdit(post)}
          className="flex items-center justify-center text-blue-500 hover:text-blue-700 bg-slate-200 w-10 h-10 rounded-full"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="flex items-center justify-center text-red-500 hover:text-red-700 bg-slate-200 w-10 h-10 rounded-full ml-5"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
