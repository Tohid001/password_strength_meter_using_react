import React, { Component } from "react";
import Books from "./Books/Books";
export default class App extends Component {
  state = {
    books: [
      { name: "Manufacturig Engg.", author: "Mr. X", price: "100$", id: 1 },
      { name: "Operations Management", author: "Mr. Y", price: "150$", id: 2 },
      { name: "Differential Calculus", author: "Mr. Z", price: "200$", id: 3 },
    ],
  };
  handleState = (id) => {
    let newBooks = this.state.books.filter((book) => {
      return book.id !== id;
    });
    this.setState({ books: newBooks });
  };
  render() {
    return (
      <div className="container">
        <Books
          books={this.state.books}
          handleState={this.handleState.bind(this)}
        />
      </div>
    );
  }
}
