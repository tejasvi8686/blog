import React, { useState } from "react";
import { categories } from "../../../../constant/index.js"

const BlogGrid = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
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
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
