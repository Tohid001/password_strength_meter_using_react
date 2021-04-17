import React, { Component } from "react";

class Timer extends Component {
  state = { minute: 0, seconds: 0 };
  incrementSec = () => {
    this.setState((prev) => {
      if (prev.seconds === 59) {
        return { minute: this.state.minute + 1, seconds: 0 };
      }
      return { seconds: prev.seconds + 1 };
    });
  };
  decrementSec = () => {
    if (this.state.seconds > 0 || this.state.minute > 0) {
      this.setState((prev) => {
        if (prev.seconds === 1 && this.state.minute > 0) {
          return { seconds: 0 };
        } else if (prev.seconds === 0 && prev.minute > 0) {
          return { minute: prev.minute - 1, seconds: 59 };
        }
        return { seconds: prev.seconds - 1 };
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>{`${this.state.minute}:${this.state.seconds}`}</h1>
          <button onClick={this.incrementSec} className="btn">
            +
          </button>
          <button onClick={this.decrementSec} className="btn">
            -
          </button>
        </div>
        <div className="container2">
          <button className="btn">Start</button>
          <button className="btn">Stop</button>
          <button className="btn">Reset</button>
        </div>
      </div>
    );
  }
}
export default Timer;
