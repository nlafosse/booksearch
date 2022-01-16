import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const NavBarTwo = () => {
  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setTitle(title.split(" ").join("+"));
    setRedirect(true);
  };

  return (
    <div class="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
      <div class="ml-8 text-lg text-gray-700 hidden md:flex">Booklisted</div>
      <span class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          value={title}
          placeholder="title, author, isbn"
          class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <i
          class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
          onClick={handleSearch}
        >
          <BiSearchAlt />
        </i>
        {redirect && <Redirect to={`/books/${title}`} />}
      </span>
      <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i class="fas fa-bars"></i>
      </div>
      <div class="flex flex-row-reverse mr-8 hidden md:flex">
        <div class="text-gray-700 text-center px-4 py-2 m-2">Authors</div>
        <div class="text-gray-700 text-center px-4 py-2 m-2">Subjects</div>
      </div>
    </div>
  );
};

export default NavBarTwo;
