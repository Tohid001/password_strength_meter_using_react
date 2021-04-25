import React, { Component } from "react";
import Book from "./Book";

export default class Books extends Component {
  render() {
    const { books, handleState } = this.props;
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
          ></img>
          <div className="card-body">
            {/* <h5 className="card-title" className=" text-center">
              Booklist
            </h5> */}

            {books.map((book) => {
              return <Book book={book} handleState={handleState} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
