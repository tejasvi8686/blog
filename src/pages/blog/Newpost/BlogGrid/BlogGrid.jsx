import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../../../components/BlogCard.jsx";
import { categories } from "../../../../constant/index.js";

const BlogGrid = ({ posts, onEditPost, onDeletePost }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const handleEditPost = (postId) => {
    navigate(`/createblog/editPost/${postId}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-200 min-h-screen">
      <div className="flex justify-between items-center bg-blue-500 py-2 px-4 rounded-t-lg">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-2 rounded-full">
          Blog Grid
        </button>
        <div className=""></div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 bg-slate-100 border border-blue-500 rounded-lg">
        {filteredPosts.length === 0 ? (
          <p className="col-span-full text-center text-4xl font-bold text-gray-600">
            No blog posts available.
          </p>
        ) : (
          filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onEdit={() => handleEditPost(post.id)}
              onDelete={() => onDeletePost(post.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
