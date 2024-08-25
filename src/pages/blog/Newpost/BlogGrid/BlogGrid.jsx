import React, { useState } from "react";
import BlogCard from "../../../../components/BlogCard.jsx"
import { categories } from "../../../../constant/index.js";

const BlogGrid = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6 bg-blue-500 py-2 px-4 rounded-t-lg">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-2 rounded-full">
            Blog Grid
          </button>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
