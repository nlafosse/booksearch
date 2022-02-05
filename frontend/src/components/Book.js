import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import nocover from "../images/nocover.jpg";

const Book = (props) => {
  const [book, setBook] = useState({});
  const [images, setImages] = useState({});
  const [authorName, setAuthorName] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${props.match.params.bookid}`
      )
      .then((info) => {
        setBook(info.data.volumeInfo);
        setImages(info.data.volumeInfo.imageLinks);
        setAuthorName(info.data.volumeInfo.authors);
        setDesc(info.data.volumeInfo.description);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  console.log("books", book);
  console.log("images", images);
  console.log("authorName", authorName);

  return (
    <div className="flex justify-center">
      <article className="m-10 md:w-1/2 bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
        <img src={images.thumbnail} className="box-border rounded h-64" />
        <h2 className="font-bold">{book.title}</h2>
        <p>by: </p>
        {authorName.map((name) => {
          return (
            <div>
              <p className="mt-2 my-2">
                <Link to={`/authors/${name.split(" ").join("+")}`}>{name}</Link>
              </p>
            </div>
          );
        })}
        {desc.replace(/<\/?[^>]+>/gi, "")}
      </article>
    </div>
  );
};

export default Book;
