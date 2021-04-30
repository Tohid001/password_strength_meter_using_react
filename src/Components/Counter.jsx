import React, { Component } from "react";

export default class Counter extends Component {
  state = { count: 0 };
  handleCount = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    const { render } = this.props;
    return render(count, this.handleCount);
  }
}
