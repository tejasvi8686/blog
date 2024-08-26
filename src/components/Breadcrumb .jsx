import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="pt-4 px-4 md:px-10 flex flex-wrap justify-start md:justify-end">
      <ul className="flex flex-wrap space-x-2 text-gray-700 text-sm border border-b-2 border-blue-500 bg-white rounded-full py-2 px-4 shadow-md">
        <li className="breadcrumb-item">
          <Link to="/" className="font-semibold text-gray-800 hover:text-blue-500">
            Dashboard <span className="mx-2 text-gray-500">/</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="breadcrumb-item flex items-center">
              {index > 0 && <span className="mx-2 text-gray-500">/</span>}
              {isLast ? (
                <span className="text-gray-500">{value}</span>
              ) : (
                <Link
                  to={to}
                  className="font-semibold text-gray-800 hover:text-blue-500"
                >
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
