import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">
        <Link to={"/"}>
          <h3 className="font-bold mt-2 my-2 text-2xl">Booklisted</h3>
        </Link>
      </div>

      <Searchbar />

      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i className="fas fa-bars"></i>
      </div>
      <div className="flex flex-row mr-8 hidden md:flex">
        <Link to={"/authors"}>
          <div className="text-gray-700 text-center px-4 py-2 m-2">Authors</div>
        </Link>
        <Link to={"/subjects"}>
          <div className="text-gray-700 text-center px-4 py-2 m-2">
            Subjects
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
