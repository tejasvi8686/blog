import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/blog/CreateBlog";
import "./App.css";
import NewPost from "./pages/blog/Newpost/NewPost";
import BlogGrid from "./pages/blog/Newpost/Bloggrid/Bloggrid";

const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/createblog" element={<CreateBlog />} />
          <Route path="/dashboard/createblog/newpost" element={<NewPost />} />
          <Route path="/dashboard/createblog/newpost/blogGrid" element={<BlogGrid/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
