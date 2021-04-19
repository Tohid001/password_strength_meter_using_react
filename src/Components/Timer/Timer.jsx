import React, { Component } from "react";
let x = false;
let y = false;
class Timer extends Component {
  state = { minute: 0, seconds: 0 };
  forwardIntervalId = null;
  backwardIntervalId = null;
  incrementSec = () => {
    if (!this.forwardIntervalId && !this.backwardIntervalId) {
      this.setState((prev) => {
        if (prev.seconds === 59) {
          return { minute: this.state.minute + 1, seconds: 0 };
        }
        return { seconds: prev.seconds + 1 };
      });
    }
  };
  forward = () => {
    if (!this.forwardIntervalId && !this.backwardIntervalId) {
      this.forwardIntervalId = setInterval(() => {
        this.setState((prev) => {
          if (prev.seconds === 59) {
            return { minute: this.state.minute + 1, seconds: 0 };
          }
          return { seconds: prev.seconds + 1 };
        });
      }, 1000);
    }
  };
  stop = () => {
    if (this.forwardIntervalId) {
      clearInterval(this.forwardIntervalId);
      x = true;
      // this.forwardIntervalId = null;
    } else if (this.backwardIntervalId) {
      clearInterval(this.backwardIntervalId);
      y = true;
      // this.backwardIntervalId = null;
    }
  };
  resume = () => {
    if (x || y) {
      if (this.forwardIntervalId) {
        this.forwardIntervalId = null;
        this.forwardIntervalId = setInterval(() => {
          this.setState((prev) => {
            if (prev.seconds === 59) {
              return { minute: this.state.minute + 1, seconds: 0 };
            }
            return { seconds: prev.seconds + 1 };
          });
        }, 1000);
      } else if (this.backwardIntervalId) {
        this.backwardIntervalId = null;
        this.backwardIntervalId = setInterval(() => {
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
                  clearInterval(this.backwardIntervalId);
                  this.backwardIntervalId = null;
                }
              }
            );
          }
        }, 1000);
      }
    }
  };
  reset = () => {
    this.stop();
    if (this.forwardIntervalId) {
      this.forwardIntervalId = null;
    } else if (this.backwardIntervalId) {
      this.backwardIntervalId = null;
    }
    this.setState((prev) => {
      return { minute: 0, seconds: 0 };
    });
  };

  decrementSec = () => {
    if (!this.forwardIntervalId && !this.backwardIntervalId) {
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

  backward = () => {
    if (!this.forwardIntervalId && !this.backwardIntervalId)
      this.backwardIntervalId = setInterval(() => {
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
                clearInterval(this.backwardIntervalId);
                this.backwardIntervalId = null;
              }
            }
          );
        }
      }, 1000);
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>{`${this.state.minute}m:${this.state.seconds}s`}</h1>
          <div className="button">
            <button onClick={this.incrementSec} className="btn">
              +
            </button>
            <button onClick={this.decrementSec} className="btn">
              -
            </button>
          </div>
        </div>
        <div className="container2">
          <button className="btn" onClick={this.backward}>
            Backward Timer!
          </button>
          <button className="btn" onClick={this.forward}>
            Forward Timer!
          </button>
          <button className="btn" onClick={this.stop}>
            Stop
          </button>
          <button className="btn" onClick={this.resume}>
            Resume
          </button>
          <button className="btn" onClick={this.reset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
export default Timer;
