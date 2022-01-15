import React from "react";
import Books from "./Books";
import { Route, Redirect } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const handleSearch = () => {
    let searchTextMinusSpaces = title.split(" ").join("+");
    setTitle(searchTextMinusSpaces);
    setRedirect(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          placeholder={"search book titles"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="gatorGif">
        <img
          alt="Gator surrounded by books"
          src="https://media0.giphy.com/media/9Dk2vkAmYs5dsSRu3B/giphy.gif"
        />
      </div>
      <div>
        <Route path="/books" component={() => <Books title={title} />} />
        {redirect && <Redirect to={`/books/${title}`} />}
      </div>
    </div>
  );
};

export default Home;
