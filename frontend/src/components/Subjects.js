import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Subjects = () => {
  const [subject, setSubject] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setSubject(subject);
    setRedirect(true);
  };

  return (
    <div className="flex flex-col">
      <div>
        <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="text"
            value={subject}
            placeholder="subject/genre"
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
          {redirect && <Redirect to={`/subjects/${subject}`} />}
        </span>
      </div>

      <div>
        <ul>
          <li>subject</li>
          <li>subject</li>
          <li>subject</li>
          <li>subject</li>
          <li>subject</li>
          <li>subject</li>
          <li>subject</li>
        </ul>
      </div>
    </div>
  );
};

export default Subjects;
