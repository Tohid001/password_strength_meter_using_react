import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <h1>Skills:</h1>
        <ul>
          <li>
            <a href="#	">{this.props.SkillA}</a>
          </li>
          <li>
            <a href="#	">{this.props.SkillB}</a>
          </li>
          <li>
            <a href="#	">{this.props.SkillC}</a>
          </li>
          <li>
            <a href="#	">{this.props.SkillD}</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Skills;
