import React, { useState, useEffect } from "react";
import nocover from "../images/nocover.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.match.params.title}&key=${process.env.REACT_APP_BOOKS_API_KEY}`
      )
      .then((info) => {
        setBooks(info.data.items);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [props]);

  console.log("books hook:", books);

  return (
    <div className="flex flex-col items-center">
      <section className="relative mt-10 grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => {
          return (
            <article className="bg-amber-50 py-5 px-10 rounded-lg sm:px-5">
              <div>
                <img
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : nocover
                  }
                  alt={book.volumeInfo.title}
                  className="box-border h-64"
                />
              </div>
              <div>
                <Link to={`/book/${book.id}`}>
                  <h3 className="font-bold text-orange-600 hover:underline mt-2 my-2 text-2xl">
                    {book.volumeInfo.title}
                  </h3>
                </Link>

                {book.volumeInfo.authors.map((name) => {
                  return (
                    <Link to={`/authors/${name.split(" ").join("+")}`}>
                      <p>{book.volumeInfo.authors}</p>
                    </Link>
                  );
                })}
                <p>Publisher: {book.volumeInfo.publisher}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Books;
