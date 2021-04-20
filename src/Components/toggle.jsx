import React, { Component } from "react";

class Toggle extends Component {
  render() {
    return (
      <button onClick={() => this.props.format(this.props.local)}>
        {this.props.local === "bn-BD"
          ? "Click here to change the format"
          : "go back to default"}
      </button>
    );
  }
}
export default Toggle;
