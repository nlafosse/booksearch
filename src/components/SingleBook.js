import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import nocover from "../images/nocover.jpg";

const SingleBook = (props) => {
  const [book, setBook] = useState({});
  const [images, setImages] = useState({});
  const [authorName, setAuthorName] = useState([]);

  useEffect(() => {
    console.log("THIS BOOK'S PROPS:", props);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${props.match.params.bookid}`
      )
      .then((info) => {
        setBook(info.data.volumeInfo);
        setImages(info.data.volumeInfo.imageLinks);
        setAuthorName(info.data.volumeInfo.authors);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  console.log("books", book);
  console.log("images", images);
  console.log("authorName", authorName);

  return (
    <div>
      <img src={images.thumbnail} className="box-border h-64" />
      <h2>{book.title}</h2>
      <section>
        {authorName.map((name) => {
          return (
            <div>
              <Link to={`/author/${name.split(" ").join("+")}`}>
                <h3 className="font-bold mt-2 my-2 text-2xl">{name}</h3>
              </Link>
            </div>
          );
        })}
      </section>

      {/* {book.imageLinks.map((link) => {
        return <div>{link.medium}</div>;
      })} */}
      {/* <article className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
        <div>
          <img
            src={book.volumeInfo.imageLinks}
            alt={book.volumeInfo.title}
            className="box-border h-64"
          />
        </div>
        <div>
          <h3 className="font-bold mt-2 my-2 text-2xl">
            {book.volumeInfo.title}
          </h3>
          <p className="mb-4">{book.volumeInfo.description}</p>
          <p>{book.volumeInfo.authors}</p>
        </div>

        <ul>
          <li>Publisher: {book.volumeInfo.publisher}</li>
          <li>categories: {book.volumeInfo.categories}</li>
        </ul>
      </article> */}
    </div>
  );
};

export default SingleBook;