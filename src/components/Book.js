import React from "react";

function Book({ name, author }) {
  return (
    <div className="books">
      <div>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div>
        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Book;
