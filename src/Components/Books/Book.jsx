import React, { Component } from "react";

export default class Book extends Component {
  state = { isEditable: false };
  render() {
    const { book, handleState } = this.props;
    return (
      <li className="list-group-item d-flex flex-sm-column flex-lg-row">
        {this.state.isEditable ? (
          <input
            className="form-control"
            type="text"
            name=""
            value={book.name}
            style={{ width: "auto" }}
          />
        ) : (
          <p>{book.name}</p>
        )}
        <span className="ml-lg-auto text-sm-center text-lg-left">
          {book.price}
        </span>
        <div className="d-flex ml-lg-4">
          <span
            className="mr-lg-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleState(book.id)}
          >
            <i class="fas fa-trash"></i>
          </span>
          <span
            className="ml-sm-auto ml-lg-auto"
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.setState({ isEditable: true });
            }}
          >
            <i class="fas fa-edit"></i>
          </span>
        </div>
      </li>
    );
  }
}
