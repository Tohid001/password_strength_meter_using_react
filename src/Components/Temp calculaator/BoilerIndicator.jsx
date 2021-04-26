import React, { Component } from "react";

export default class BoilerIndicator extends Component {
  render() {
    return (
      <p>
        {Number.isNaN(this.props.temp)
          ? "insert temp."
          : this.props.temp >= 100
          ? "water is boiling"
          : "water won't boil"}
      </p>
    );
  }
}
