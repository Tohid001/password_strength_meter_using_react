import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { book, handleState } = this.props;
    return (
      <li className="list-group-item d-flex">
        <p>{book.name}</p>
        <span className="ml-auto">{book.price}</span>
        <span
          className="mx-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleState(book.id)}
        >
          <i class="fas fa-trash"></i>
        </span>
      </li>
    );
  }
}
