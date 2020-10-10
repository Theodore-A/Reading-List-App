import React, { useState, createContext } from "react";

export const BookContext = createContext();

export function BookProvider(props) {
  const [books, setBooks] = useState([
    // {
    //   name: "The Lost Symbol",
    //   author: "Dan Brown",
    //   id: 234567,
    // },
    // {
    //   name: "Living in Bondage",
    //   author: "August Slime",
    //   id: 98765,
    // },
  ]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
}
