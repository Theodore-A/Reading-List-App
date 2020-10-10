import React, { useContext } from "react";
import { BookContext } from "./BookContext";

function Book({ name, author, book }) {
  const [books, setBooks] = useContext(BookContext);

  const deleteHandler = () => {
    setBooks(books.filter((el) => el.id !== book.id));
  };

  const completeHandler = () => {
    setBooks(
      books.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="books">
      <div className={`book-list-li ${book.completed ? "completed" : ""}`}>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Book;
