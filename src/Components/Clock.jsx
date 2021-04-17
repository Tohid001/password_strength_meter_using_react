import React, { Component } from "react";

class Clock extends Component {
  state = { date: new Date(), counter: 0 };
  componentDidMount() {
    this.tick();
  }
  tick() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log("clicked");
  };
  render() {
    return (
      <>
        <div>
          <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
        </div>
        <div>
          <h1>{`${this.state.counter}`}</h1>
          <button onClick={this.increment}>{"Count"}</button>
        </div>
      </>
    );
  }
}
export default Clock;
