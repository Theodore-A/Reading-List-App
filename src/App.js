import React from "react";
import "./App.css";

import { BookProvider } from "./components/BookContext";
import Nav from "./components/Nav";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav />
        <div className="container">
          <BookList />
          <AddBook />
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
