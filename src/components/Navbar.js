import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">
        <Link to={"/"}>
          <h3 className="font-bold mt-2 my-2 text-2xl">Booklisted</h3>
        </Link>
      </div>

      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i className="fas fa-bars"></i>
      </div>
      <div className="flex flex-row mr-8 hidden md:flex">
        <div className="text-gray-700 text-center px-4 py-2 m-2">Authors</div>
        <div className="text-gray-700 text-center px-4 py-2 m-2">Subjects</div>
      </div>
    </div>
  );
};

export default NavBar;
