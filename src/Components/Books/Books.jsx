import React, { Component } from "react";
import Book from "./Book";

export default class Books extends Component {
  state = { isSearched: false, selectVAlue: "Chose books..." };
  render() {
    const { books, handleState, handleSearch } = this.props;
    const { isSearched, selectVAlue } = this.state;
    return (
      <div className="container" style={{ padding: "0" }}>
        <div className="card" style={{ width: "60%", margin: "auto" }}>
          <h5 className="card-title text-center">
            <i class="fas fa-book mr-2"></i>Booklist
          </h5>
          <img
            className="card-img-top"
            src="https://wallpaperaccess.com/full/967428.jpg"
            style={{ width: "90%", margin: "auto" }}
            alt="book"
          ></img>

          <div className="card-body">
            {/* <h5 className="card-title" className=" text-center">
              Booklist
            </h5> */}
            <div className="d-flex justify-content-center mb-3">
              <nav className="navbar p-0 navbar-light bg-light">
                <select
                  class="form-control d-inline-block mr-sm-2 custom-select"
                  style={{ width: "auto" }}
                  value={selectVAlue}
                  onChange={(event) => {
                    this.setState({ selectVAlue: event.target.value });
                  }}
                >
                  <option>Chose books...</option>
                  {books.map((book) => {
                    return <option>{book.name}</option>;
                  })}
                </select>
                <button className="btn btn-outline-success my-2 my-sm-0">
                  Add to list
                </button>
              </nav>
            </div>
            <li
              className="list-group-item d-flex justify-content-center text-warning"
              style={{ backgroundColor: "green" }}
            >
              <span>{} added</span>
            </li>
            {books.map((book) => {
              return <Book book={book} handleState={handleState} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

// <input
// className="form-control d-inline-block mr-sm-2"
// style={{ width: "auto" }}
// type="search"
// placeholder="Select your books"
// aria-label="Search"
// />
