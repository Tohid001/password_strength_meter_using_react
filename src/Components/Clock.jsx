import React, { Component } from "react";
import Toggle from "./toggle";

class Clock extends Component {
  state = {
    date: new Date(),
    local: "en-US",
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  };
  changeFormat = (local) => {
    this.setState({ local: local });
  };
  render() {
    return (
      <>
        <h1>{this.state.date.toLocaleTimeString(this.state.local)}</h1>
        {this.state.local === "en-US" ? (
          <Toggle format={this.changeFormat} local="bn-BD" show={false} />
        ) : (
          <Toggle format={this.changeFormat} local="en-US" show={true} />
        )}
      </>
    );
  }
}
export default Clock;
