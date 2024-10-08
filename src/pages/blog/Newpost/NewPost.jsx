import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories, locations } from "../../../constant/index.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = ({ addNewPost, posts, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (id) {
      const postToEdit = posts.find((post) => post.id === parseInt(id));
      if (postToEdit) {
        setTitle(postToEdit.title);
        setCategory(postToEdit.category);
        setContent(postToEdit.content);
        setImage(postToEdit.image);
        setSelectedLocation(postToEdit.location);
      }
    }
  }, [id, posts]);

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
    if (!title || !category || !content || !selectedLocation) {
      toast.error("Please fill in all required fields!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const newPost = {
      title,
      category,
      content,
      image,
      location: selectedLocation,
    };

    if (id) {
      updatePost({ ...newPost, id: parseInt(id) });
      toast.success("Post updated successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      addNewPost(newPost);
      toast.success("Post created successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    }

    setTimeout(() => {
      navigate("/createblog/newpost/blogGrid");
    }, 2000);
  };

  return (
    <section className="bg-slate-200">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
          <button className="bg-yellow-400  text-black px-7 py-2 rounded-full">
            {id ? "Edit Post" : "New Post"}
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
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
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

          <div className="sm:pt-12 pt-16">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select Location
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className=" sm:pt-10 pt-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image
            </label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-8 py-2 mt-10 rounded-md hover:bg-blue-700"
          >
            {id ? "Update Post" : "Create Post"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default NewPost;
