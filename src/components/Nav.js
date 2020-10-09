import React, { useContext } from "react";
import { BookContext } from "./BookContext";

function Nav() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div className="nav">
      <h1> Reading List </h1>
      <p>Number of Book: {books.length} </p>
    </div>
  );
}

export default Nav;
