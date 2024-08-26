import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/blog/CreateBlog";
import NewPost from "./pages/blog/Newpost/NewPost";
import BlogGrid from "./pages/blog/Newpost/Bloggrid/BlogGrid";
import BlogDetail from "./pages/blog/Newpost/BlogGrid/BlogDetail/BlogDetail";
import EditPost from "./pages/blog/EditPost/EditPost";
import Breadcrumb from "./components/Breadcrumb ";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <main className="bg-slate-200 ">
      <BrowserRouter>
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route
            path="/createblog/newpost"
            element={<NewPost addNewPost={addNewPost} />}
          />
          <Route
            path="/createblog/newpost/blogGrid"
            element={
              <BlogGrid
                posts={posts}
                onEditPost={(postId) =>
                  navigate(`/createblog/editPost/${postId}`)
                }
                onDeletePost={handleDeletePost}
              />
            }
          />
          <Route
            path="/createblog/newpost/blogGrid/blogDetail/:id"
            element={<BlogDetail posts={posts} />}
          />
          <Route
            path="/createblog/editPost/:id"
            element={<EditPost posts={posts} updatePost={updatePost} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
