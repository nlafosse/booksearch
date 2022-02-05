import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setSearchText(text);
    // setSearchText(text.split(" ").join("+"));
    setRedirect(true);
  };

  console.log("key pressed", text);

  return (
    <div className="mt-4 md:mt-0 md:w-1/2 h-10 bg-orange-200 cursor-pointer border border-orange-300 text-sm rounded-full flex">
      <input
        type="text"
        value={text}
        placeholder="title, author, isbn"
        className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setText(e.target.value);
            handleSearch();
          }
        }}
      />
      <i className="m-3 text-lg text-black w-4" onClick={handleSearch}>
        <BiSearchAlt />
      </i>
      {redirect && <Redirect to={`/books/${searchText}`} />}
    </div>
  );
};

export default Searchbar;
