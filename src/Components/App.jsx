import React, { Component } from "react";
import Clocklist from "./Clocklist";
export default class App extends Component {
  render() {
    const numbers = [1, 2, 3];
    return <Clocklist numbers={numbers} />;
  }
}
