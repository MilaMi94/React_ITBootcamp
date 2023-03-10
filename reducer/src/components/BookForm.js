import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    if (!title.trim() || !author.trim()) {
      setError("You need to insert some text!");
      return;
    }

    dispatch({
      type: "ADD_BOOK",
      payload: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <strong>{error}</strong> : null}
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="author"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <input type="submit" value="Add book"></input>
    </form>
  );
};

export default BookForm;
