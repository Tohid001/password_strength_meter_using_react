import React, { Component } from "react";
import { tryConvert, toCelsius, toFahrenheit } from "./convert";
import TempInput from "./TempInput";
export default class Calculator extends Component {
  state = { temperature: "", scale: "" };
  handleChange = (event, scale) => {
    this.setState({ temperature: event.target.value, scale });
  };
  render() {
    const { temperature, scale } = this.state;
    const celcius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TempInput
          temperature={celcius}
          scale="c"
          handleChange={this.handleChange.bind(this)}
        />
        <TempInput
          temperature={farenheit}
          scale="f"
          handleChange={this.handleChange.bind(this)}
        />
      </>
    );
  }
}
