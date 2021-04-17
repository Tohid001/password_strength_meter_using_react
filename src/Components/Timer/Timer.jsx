import React, { Component } from "react";

class Timer extends Component {
  state = { minute: 0, seconds: 0 };
  incrementSec = () => {
    if (!this.intervalId) {
      this.setState((prev) => {
        if (prev.seconds === 59) {
          return { minute: this.state.minute + 1, seconds: 0 };
        }
        return { seconds: prev.seconds + 1 };
      });
    }
  };
  decrementSec = () => {
    if (!this.intervalId) {
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
    }
  };
  intervalId = null;
  start = () => {
    if (!this.intervalId)
      this.intervalId = setInterval(() => {
        if (this.state.seconds > 0 || this.state.minute > 0) {
          this.setState(
            (prev) => {
              if (prev.seconds === 1 && this.state.minute > 0) {
                return { seconds: 0 };
              } else if (prev.seconds === 0 && prev.minute > 0) {
                return { minute: prev.minute - 1, seconds: 59 };
              }
              return { seconds: prev.seconds - 1 };
            },
            () => {
              if (this.state.minute === 0 && this.state.seconds === 0) {
                clearInterval(this.intervalId);
                this.intervalId = null;
              }
            }
          );
        }
      }, 1000);
  };
  stop = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  reset = () => {
    this.stop();
    this.setState((prev) => {
      return { minute: 0, seconds: 0 };
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>{`${this.state.minute}m:${this.state.seconds}s`}</h1>
          <button onClick={this.incrementSec} className="btn">
            +
          </button>
          <button onClick={this.decrementSec} className="btn">
            -
          </button>
        </div>
        <div className="container2">
          <button className="btn" onClick={this.start}>
            Start
          </button>
          <button className="btn" onClick={this.stop}>
            Stop
          </button>
          <button className="btn" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Timer;
