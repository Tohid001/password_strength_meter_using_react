import React, { Component } from "react";
import Book from "./Book";

export default class Books extends Component {
  state = {
    // isButtonClicked: false,
    selectVAlue: "Chose books...",
    selectedItem: "",
  };
  render() {
    const { books, handleState, handleClick } = this.props;
    const { selectVAlue, selectedItem } = this.state;
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
            <div className="d-flex justify-content-center mb-3">
              <nav className="navbar p-0 navbar-light bg-light">
                <select
                  class="form-control d-inline-block mr-sm-2 custom-select"
                  style={{ width: "auto" }}
                  value={selectVAlue}
                  onChange={(event) => {
                    this.setState({
                      selectVAlue: event.target.value,
                      selectedItem: event.target.value,
                    });
                  }}
                >
                  <option>Chose books...</option>
                  <option>Manufacturig Engg.</option>
                  <option>Operations Management</option>
                  <option>Differential Calculus</option>
                </select>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={() => {
                    handleClick(selectedItem);
                    this.setState({
                      selectVAlue: "Chose books...",
                      selectedItem: "",
                    });
                  }}
                >
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
            {Books.map((book) => {
              return <Book book={book} handleState={handleState} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

// {!isButtonClicked ? (
//   <li className="list-group-item d-flex justify-content-center">
//     <span>0 items added</span>
//   </li>
// ) : (
//   books.map((book) => {
//     if (book.name === selectedItem) {
//       return (
//         <Book
//           book={book}
//           handleState={handleState}
//           isButtonClicked={isButtonClicked}
//         />
//       );
//     }
//   })
// )}
