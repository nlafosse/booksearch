import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

const Authors = () => {
  const [name, setSubject] = useState("");
  const [authors, setAuthors] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setSubject(name);
    setRedirect(true);
  };

  console.log("authors", authors);

  return (
    <div className="flex flex-col items-center mt-10">
      <span className="w-3/4 md:w-1/2 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex item-around">
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
        <section className="relative mt-11 grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {authors.map((author) => {
            return (
              <article className="bg-amber-50 py-5 px-10 rounded-lg sm:px-5">
                <div>
                  {author.volumeInfo.authors.map((name) => {
                    return (
                      <Link to={`/authors/${name.split(" ").join("+")}`}>
                        <p>{author.volumeInfo.authors}</p>
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Authors;
