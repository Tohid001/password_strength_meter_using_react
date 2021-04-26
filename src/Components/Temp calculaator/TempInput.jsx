import React, { Component } from "react";

export default class TempInput extends Component {
  render() {
    return (
      <div class="form-group">
        <label for="exampleInputPassword1">temp in {this.props.unit}</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="enter temp."
          value={Number.isNaN(this.props.temp) ? "" : this.props.temp}
          onChange={this.props.handleChange}
        ></input>
      </div>
    );
  }
}
