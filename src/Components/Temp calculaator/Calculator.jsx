import React, { Component } from "react";
import TempInput from "./TempInput";
import BoilerIndicator from "./BoilerIndicator";

export default class Calculator extends Component {
  state = {
    temp: "",
  };
  handleChange = (event) => {
    this.setState({ temp: event.target.value });
  };
  render() {
    return (
      <>
        <TempInput
          temp={parseFloat(this.state.temp)}
          unit="celcius"
          handleChange={this.handleChange.bind(this)}
        />
        <TempInput temp={parseFloat(this.state.temp)} unit="farenhite" />
        <BoilerIndicator temp={parseFloat(this.state.temp)} />
      </>
    );
  }
}
