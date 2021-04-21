import React, { Component } from "react";
import Clock from "./Clock";

export default class Clocklist extends Component {
  render() {
    const { numbers } = this.props;
    return (
      <>
        {numbers.map(() => (
          <Clock key={Math.random()} />
        ))}
      </>
    );
  }
}
