import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "../../../constant/index.js"; 

const NewPost = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handlePost = () => {
    const newPost = { title, category, content, location: "Your Location" };
    addNewPost(newPost);
    navigate("/blogGrid");
  };

  return (
    <section className="bg-slate-200">
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-2 rounded-full">
            New Post
          </button>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter blog title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Content
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="h-60"
            />
          </div>

          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-6 py-2 mt-16 rounded-md hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
