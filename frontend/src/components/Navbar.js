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
      <div className="md:flex items-center justify-between bg-orange-300 py-4 md:px-10 px-7 mono-['Courier New']">
        <div className="font-bold text-2xl cursor-pointer flex items-center  text-black">
          <Link to={"/"}>
            <h2 className="hover:text-white duration-500 pr-20">Booklisted</h2>
          </Link>
        </div>

        <Searchbar />

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-300 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-70 opacity-100" : "top-[-490px]"
          } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                onClick={() => setOpen(!open)}
                className="text-gray-800 hover:text-white duration-500"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
