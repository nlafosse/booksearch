import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  let links = [
    { name: "Authors", link: "/authors" },
    { name: "Subjects", link: "/subjects" },
  ];

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-orange-300 py-4 md:px-10 px-7 font-[Poppins]">
        <div className="font-bold text-2xl cursor-pointer flex items-center  text-gray-800">
          <Link to={"/"}>
            <h2 className="hover:text-white pr-20">Booklisted</h2>
          </Link>
        </div>

        <Searchbar />

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          <button
            type="button"
            class="block text-gray-800 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 hover:text-white"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
