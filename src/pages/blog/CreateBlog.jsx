import React from "react";
import DynamicButton from "../../components/DynamicButton";

const CreateBlog = () => {
  return (
    <section className="flex sm:flex-row flex-col sm:gap-10 gap-5 bg-slate-200 h-screen sm:p-20 p-7">
      <DynamicButton text="New Post" link="/createblog/newpost" />
      <DynamicButton text="Blog Grid" link="/createblog/newpost/blogGrid" />
    </section>
  );
};

export default CreateBlog;
