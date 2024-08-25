import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "../../../constant/index.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // handle image function
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    const newPost = {
      title,
      category,
      content,
      image,
      location: "Your Location",
    };
    addNewPost(newPost);
  
    // Show success toast
    toast.success("Post created successfully!", {
      position: "top-right",
      autoClose: 2000, // 2 seconds before it closes automatically
    });
  
    // Navigate to BlogGrid after the toast has had time to display
    setTimeout(() => {
      navigate("/dashboard/createblog/newpost/blogGrid");
    }, 2000); // Wait for 2 seconds before navigating
  };
  

  return (
    <section className="bg-slate-200">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
          <button className="bg-yellow-400  text-black px-7 py-2 rounded-full">
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

          <div className=" sm:pt-10 pt-16  ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image
            </label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default NewPost;
