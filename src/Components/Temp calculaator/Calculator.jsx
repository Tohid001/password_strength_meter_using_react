import React, { Component } from "react";
import { tryConvert, toCelsius, toFahrenheit } from "./convert";
import TempInput from "./TempInput";
import BoilerIndicator from "./BoilerIndicator";
export default class Calculator extends Component {
  state = { temperature: "", scale: "" };
  handleChange = (event, scale) => {
    this.setState({ temperature: event.target.value, scale });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TempInput
          temperature={celsius}
          scale="c"
          onChange={this.handleChange}
        />
        <TempInput
          temperature={fahrenheit}
          scale="f"
          onChange={this.handleChange}
        />
        <BoilerIndicator temperature={parseFloat(celsius)} />
      </>
    );
  }
}
