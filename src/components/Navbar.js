import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <h3 className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Booklisted
          </h3>
        </Link>
      </div>

      <Searchbar />

      <div>
        <Link to={"/authors"}>
          <div>Authors</div>
        </Link>
        <Link to={"/subjects"}>
          <div>Subjects</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
