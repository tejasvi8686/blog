import React from "react";
import DynamicButton from "../components/DynamicButton";

const Dashboard = () => {
  return (
    <section className="flex sm:flex-row flex-col sm:gap-10 gap-5 bg-slate-200 h-screen sm:p-20 p-7">
      <DynamicButton text="Create Blog" link="/createblog" />
      <DynamicButton text="Add New Course" link="" />
    </section>
  );
};

export default Dashboard;
