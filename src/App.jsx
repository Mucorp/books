import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./Books";
import books from "./books.json";

function App() {
  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
