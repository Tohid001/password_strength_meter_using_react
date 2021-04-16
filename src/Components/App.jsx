import React, { Component } from "react";
import Clock from "./Clock";
import Counter from "./Counter";
class App extends Component {
  render() {
    return (
      <>
        <Clock local="bn-BD" />
        <Counter />
      </>
    );
  }
}
export default App;
