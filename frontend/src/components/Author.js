import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Author = (props) => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/?q=inauthor:${props.match.params.name}`
      )
      .then((info) => {
        console.log(info.data.items);
        setAuthor(info.data.items);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  console.log("author", author);

  return (
    <div>
      {author.map((book) => {
        return (
          <div>
            <Link to={`/book/${book.id}`}>
              <h3 className="font-bold mt-2 my-2 text-2xl">
                {book.volumeInfo.title}
              </h3>
            </Link>
            <p>{book.volumeInfo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Author;
