import React, { useContext, useState } from "react";
import { BookContext } from "./BookContext";

function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useContext(BookContext);

  const bookHandler = (e) => {
    setName(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks((preBooks) => [
      ...preBooks,
      {
        name: name,
        author: author,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setName("");
    setAuthor("");
  };

  return (
    <form onSubmit={addBook}>
      <input
        onChange={bookHandler}
        value={name}
        type="text"
        name="name"
        placeholder="Enter Book Name..."
      />
      <input
        onChange={authorHandler}
        value={author}
        type="text"
        name="author"
        placeholder="Enter Author's Name..."
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default AddBook;
