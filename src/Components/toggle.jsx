import React, { Component } from "react";

class Toggle extends Component {
  render() {
    if (!this.props.enable) {
      return null;
    }
    return (
      <>
        <button onClick={() => this.props.format(this.props.local)}>
          {this.props.local === "bn-BD"
            ? "Click here to change the format"
            : "go back to default"}
        </button>
        {this.props.show && (
          <h1>go back to the original format you asshole!</h1>
        )}
      </>
    );
  }
}
export default Toggle;
