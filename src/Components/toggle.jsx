import React, { Component } from "react";

class Toggle extends Component {
  render() {
    return (
      <button onClick={() => this.props.format(this.props.local)}>
        {this.props.text}
      </button>
    );
  }
}
export default Toggle;
