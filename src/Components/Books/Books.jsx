import React, { Component } from "react";
import Book from "./Book";

export default class Books extends Component {
  render() {
    const { books, handleState } = this.props;
    return (
      <div className="container">
        <div className="card" style={{ width: "60%", margin: "auto" }}>
          <img
            className="card-img-top"
            src="https://wallpaperaccess.com/full/967428.jpg"
          ></img>
          <div className="card-body">
            <h5 className="card-title" className=" text-center">
              Booklist
            </h5>

            {books.map((book) => {
              return <Book book={book} handleState={handleState} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
