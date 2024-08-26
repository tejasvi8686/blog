import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { categories, locations } from "../../../constant/index";

const EditPost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPost((prevPost) => ({ ...prevPost, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!post.title || !post.category || !post.content || !post.location) {
      toast.error("Please fill in all required fields!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    updatePost(post);

    toast.success("Post updated successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/createblog/newpost/blogGrid");
    }, 2000);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <section className="bg-slate-200">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
          <button className="bg-yellow-400 text-black px-7 py-2 rounded-full">
            Edit Post
          </button>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleInputChange}
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
              name="category"
              value={post.category}
              onChange={handleInputChange}
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
            {/* <textarea
              name="content"
              value={post.content}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-60"
              placeholder="Enter content"
              required
            /> */}

            <ReactQuill
              theme="snow"
              value={post.content}
              onChange={handleInputChange}
              className="h-60"
            />
          </div>

          <div className="sm:pt-12 pt-16">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Location
            </label>
            <select
              name="location"
              value={post.location}
              onChange={handleInputChange}
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

          <div className="sm:pt-10 pt-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image
            </label>
            <input type="file" onChange={handleImageChange} />
            {post.image && (
              <img
                src={post.image}
                alt="Current"
                className="w-full h-60 object-cover mt-4"
              />
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-8 py-2 mt-10 rounded-md hover:bg-blue-700"
          >
            Update Post
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EditPost;
