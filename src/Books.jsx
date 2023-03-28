import { useState } from "react";
import "./Books.scss";

const Books = ({ books }) => {
  const [sortType, setSortType] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    Object.values(book).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedBooks = filteredBooks.sort((a, b) =>
    a[sortType].localeCompare(b[sortType])
  );

  return (
    <div className="books">
      <div className="books__header">
        <h2 className="books__title">Book List</h2>
        <div className="books__controls">
          <div className="books__sort">
            <label className="books__label" htmlFor="sort-select">
              Sort by:
            </label>
            <select
              className="books__select"
              id="sort-select"
              value={sortType}
              onChange={handleSortChange}
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="genre">Genre</option>
            </select>
          </div>
          <div className="books__search">
            <input
              className="books__input"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <ul className="books__list">
        {sortedBooks.map((book, index) => (
          <li key={index} className="books__item">
            {/* <img className="books__cover" src={book.cover} alt={book.title} /> */}
            <div className="books__content">
              <h3 className="books__book-title">{book.title}</h3>
              <p className="books__author">{book.author}</p>
              <p className="books__genre">{book.genre}</p>
            </div>
          </li>
        ))}

        {sortedBooks.length === 0 && (
          <h3 className="books__book-title">No book matches the criteria</h3>
        )}
      </ul>
    </div>
  );
};

export default Books;
