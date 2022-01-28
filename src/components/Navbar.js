import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-300 text-black font-bold p-2 rounded">
      <div className="hover:text-white">
        <Link to={"/"}>
          <h3>Booklisted</h3>
        </Link>
      </div>

      <Searchbar />

      <div className="flex flex-row">
        <div className="hover:text-white">
          <Link to={"/authors"}>Authors</Link>
        </div>
        <div className="hover:text-white">
          <Link to={"/subjects"}>Subjects</Link>
        </div>
        <div>
          <button
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    // <div className="flex bg-gray-300 text-black font-bold py-2 px-4 rounded">
    //   <div className="hover:text-gray-200">
    // <Link to={"/"}>
    //   <h3>Booklisted</h3>
    // </Link>
    //   </div>

    //   <Searchbar />

    // <div className="flex flex-row justify-between">
    //   <div className="hover:text-gray-200">
    //     <Link to={"/authors"}>Authors</Link>
    //   </div>
    //   <div className="hover:text-gray-200">
    //     <Link to={"/subjects"}>Subjects</Link>
    //   </div>
    // </div>
    // </div>
  );
};

export default NavBar;
