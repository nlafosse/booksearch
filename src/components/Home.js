import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSearch = () => {
    setTitle(title.split(" ").join("+"));
    setRedirect(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          placeholder={"title, author, isbn"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
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
