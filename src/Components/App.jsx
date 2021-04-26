import React, { Component } from "react";
import Books from "./Books/Books";
export default class App extends Component {
  state = {
    books: [
      {
        name: "Manufacturig Engg.",
        author: "Mr. X",
        price: "100$",
        quantity: 10,
        id: 1,
      },
      {
        name: "Operations Management",
        author: "Mr. Y",
        price: "150$",
        quantity: 15,
        id: 2,
      },
      {
        name: "Differential Calculus",
        author: "Mr. Z",
        price: "200$",
        quantity: 20,
        id: 3,
      },
    ],
  };
  handleState = (id) => {
    let newBooks = this.state.books.filter((book) => {
      return book.id !== id;
    });
    this.setState({ books: newBooks });
  };
  handleClick = (name) => {
    let nBooks = this.state.books.filter((book) => {
      return book.name === name;
    });
    this.setState({ books: [...this.state.books, ...nBooks] });
  };
  render() {
    return (
      <Books
        books={this.state.books}
        handleState={this.handleState.bind(this)}
        handleClick={this.handleClick.bind(this)}
      />
    );
  }
}
