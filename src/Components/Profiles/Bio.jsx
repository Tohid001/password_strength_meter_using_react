import React from "react";

class Bio extends React.Component {
  render() {
    return (
      <div class="Bio">
        <h1>{this.props.name}</h1>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
export default Bio;
