import React, { Component } from "react";
import Book from "./Book";

export default class Books extends Component {
  render() {
    const { books, handleState } = this.props;
    return (
      <ul className="list-group">
        {books.map((book) => {
          return <Book book={book} handleState={handleState} />;
        })}
      </ul>
    );
  }
}
