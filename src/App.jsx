import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/blog/CreateBlog";
import "./App.css";
import NewPost from "./pages/blog/Newpost/NewPost";
import BlogGrid from "./pages/blog/Newpost/Bloggrid/Bloggrid";

const App = () => {
  // State to manage posts
  const [posts, setPosts] = useState([]);

  // Function to add new post
  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now() }]);
  };

  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/createblog" element={<CreateBlog />} />
          {/* Pass the addNewPost function to NewPost */}
          <Route
            path="/dashboard/createblog/newpost"
            element={<NewPost addNewPost={addNewPost} />}
          />
          {/* Pass the posts state to BlogGrid */}
          <Route
            path="/dashboard/createblog/newpost/blogGrid"
            element={<BlogGrid posts={posts} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
