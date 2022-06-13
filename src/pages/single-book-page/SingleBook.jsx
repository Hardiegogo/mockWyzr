import axios from "axios";
import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useBooks } from "../../context/useBooks";
import "./SingleBook.css";
import { fetchSingleBook } from "../../utils/fetchSingleBook";

const SingleBook = () => {
  const params = useParams();
  const { user } = useAuth();
  const { bookState, dispatchBook } = useBooks();
  const { selectedBook } = bookState;
  console.log(selectedBook)

  useEffect(() => {
    fetchSingleBook(params.volumeId, user, dispatchBook);
  }, []);

  return (
    <>
      {user ? (
        <div className="single-book-container">
          <div className="content">
          <h1>Book details</h1>
          <div className="single-book">
            <div className="book-left">
              <div className="book-img">
                <img
                  src={selectedBook?.volumeInfo?.imageLinks.thumbnail}
                  alt=""
                />
              </div>
            </div>
            <div className="book-right">
              <h2>{selectedBook?.volumeInfo?.title}</h2>
              <p>Authors: {selectedBook?.volumeInfo?.authors.map((author) => (
                <span>{author} </span>
              ))}</p>
              <p>Available as an Ebook: {selectedBook?.saleInfo?.isEbook ? 'true' : 'false'}</p>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default SingleBook;
