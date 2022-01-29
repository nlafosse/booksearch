import React, { useState, useEffect } from "react";
import { CgExternal } from "react-icons/cg";
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
        console.log("info", info);
        setBooks(info.data.items);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [props]);

  console.log("books hook:", books);

  return (
    <div>
      <h1 className="font-bold text-center text-4xl py-5">
        Google Books Search
      </h1>

      <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => {
          return (
            <article className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
              <div>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="box-border h-64"
                />
              </div>
              <div>
                <Link to={`/book/${book.id}`}>
                  <h3 className="font-bold mt-2 my-2 text-2xl">
                    {book.volumeInfo.title}
                  </h3>
                </Link>
                <p>{book.volumeInfo.authors}</p>
              </div>

              <ul>
                <li>Publisher: {book.volumeInfo.publisher}</li>
                <li>categories: {book.volumeInfo.categories}</li>
              </ul>

              {/* <ul>
                <p className="font-bold text-l">Buy now:</p>
                {buy_links.map((link) => {
                  const { name, url } = link;
                  return (
                    <div key={name}>
                      <a
                        href={url}
                        className="flex items-center"
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        {name} <CgExternal className="ml-1" />
                      </a>
                    </div>
                  );
                })}
              </ul> */}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Books;
