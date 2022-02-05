import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Authors = () => {
  const [name, setSubject] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setSubject(name);
    setRedirect(true);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <span className=" w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex item-around">
        <input
          type="text"
          value={name}
          placeholder="author name"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <i
          className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
          onClick={handleSearch}
        >
          <BiSearchAlt />
        </i>
        {redirect && <Redirect to={`/authors/${name}`} />}
      </span>

      <div>
        <ul>
          <li>author</li>
          <li>author</li>
          <li>author</li>
          <li>author</li>
          <li>author</li>
          <li>author</li>
          <li>author</li>
        </ul>
      </div>
    </div>
  );
};

export default Authors;
