import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";

function BookList() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div>
      {books.map((book) => (
        <Book name={book.name} author={book.author} key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
