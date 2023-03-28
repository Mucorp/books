import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./Books";
import books from "./books.json";

// const books = [
//   {
//     author: "Margaret Atwood",
//     title: "The Handmaid's Tale",
//     genre: "Dystopian Fiction",
//   },
//   {
//     author: "George Orwell",
//     title: "1984",
//     genre: "Dystopian Fiction",
//   },
//   {
//     author: "Aldous Huxley",
//     title: "Brave New World",
//     genre: "Dystopian Fiction",
//   },
//   {
//     author: "Ray Bradbury",
//     title: "Fahrenheit 451",
//     genre: "Dystopian Fiction",
//   },
// ];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
