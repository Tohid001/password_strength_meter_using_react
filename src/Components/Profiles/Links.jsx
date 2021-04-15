import React from "react";
class Links extends React.Component {
  render() {
    return (
      <div class="Links">
        <h1>Links:</h1>
        <ul>
          <li>
            <a href="#">{this.props.linkA}</a>
          </li>
          <li>
            <a href="#">{this.props.linkB}</a>
          </li>
          <li>
            <a href="#">{this.props.linkC}</a>
          </li>
          <li>
            <a href="#">{this.props.linkD}</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Links;
