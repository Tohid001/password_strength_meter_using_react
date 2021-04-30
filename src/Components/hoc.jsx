import React, { Component } from "react";

const Hoc = (OriginalComponent) => {
  class NewComponent extends Component {
    state = { count: 0 };
    handleCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      const { count } = this.state;

      return (
        <OriginalComponent counter={count} handleClick={this.handleCount} />
      );
    }
  }
  return NewComponent;
};
export default Hoc;
