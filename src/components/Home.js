import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Home = () => {
  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setTitle(title.split(" ").join("+"));
    setRedirect(true);
  };

  return (
    <div className="flex flex-col">
      <div>
        <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="text"
            value={title}
            placeholder="title, author, isbn"
            className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <i
            className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
            onClick={handleSearch}
          >
            <BiSearchAlt />
          </i>
          {redirect && <Redirect to={`/books/${title}`} />}
        </span>

        {/* <input
          type="text"
          value={title}
          placeholder={"title, author, isbn"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button> */}
      </div>

      <div className="gatorGif">
        <img
          alt="gator surrounded by books"
          src="https://media0.giphy.com/media/9Dk2vkAmYs5dsSRu3B/giphy.gif"
        />
      </div>
      <div>{redirect && <Redirect to={`/books/${title}`} />}</div>
    </div>
  );
};

export default Home;
