import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log("clicked");
  };
  render() {
    return (
      <div>
        <h1>{`${this.state.counter}`}</h1>
        <button onClick={this.increment}>{"Count"}</button>
      </div>
    );
  }
}
export default Counter;
