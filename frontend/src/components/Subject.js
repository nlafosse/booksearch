import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Subject = (props) => {
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${props.match.params.subject}`
      )
      .then((info) => {
        console.log("subject get:", info);
        setSubject(info.data.items);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);
  console.log("subject hook:", subject);

  return (
    <div>
      {subject.map((book) => {
        return (
          <div>
            <Link to={`/book/${book.id}`}>
              <h4>{book.volumeInfo.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Subject;
