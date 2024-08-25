import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600">{post.category}</p>
        <p className="text-gray-500">{post.location}</p>
        <div className="flex justify-end mt-4">
          <button className="text-blue-500 hover:text-blue-700">
            <i className="fas fa-edit"></i>
          </button>
          <button className="text-red-500 hover:text-red-700 ml-4">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
