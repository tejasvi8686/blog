import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

const DynamicButton = ({ text, link }) => {
  return (
    <div className="w-full h-20">
      <Link to={link} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
        <div className="bg-blue-100 rounded-full p-2 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <span className="text-blue-500 font-bold text-lg">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-auto text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default DynamicButton;
