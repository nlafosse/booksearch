import React, { useState, useEffect } from "react";
import { CgExternal } from "react-icons/cg";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      );
      setBooks(res.data.results.books);
      console.log("books hook:", books);
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-center text-4xl py-5">NYT Bestsellers</h1>
      <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => {
          const {
            age_group,
            author,
            book_image,
            buy_links,
            description,
            primary_isbn10,
            publisher,
            rank,
            title,
          } = book;

          return (
            <article
              key={rank}
              className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5"
            >
              <div>
                <img src={book_image} alt={title} className="box-border h-64" />
              </div>
              <div>
                <h3 className="font-bold mt-2 my-2 text-2xl">{title}</h3>
                <p className="mb-4">{description}</p>
                <p>{author}</p>
              </div>

              <ul>
                <li>Publisher: {publisher}</li>
                <li>Age: {age_group}</li>
                <li>ISBN: {primary_isbn10}</li>
              </ul>

              <ul>
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
              </ul>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Books;
