import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import Links from "./Links";
class Profile extends React.Component {
  data = {
    name: "Mohammad Tohidul Islam",
    title: "Front End Web Developer, Industrial & Production Engineer",
    skills: ["JavaScript", "React js", "CAD/CAM", "Operations-Management"],
    links: ["Facebook", "LinkedIn", "GitHub", "Twitter"],
  };
  render() {
    return (
      <>
        <Bio name={this.data.name} title={this.data.title} />
        <Skills
          SkillA={this.data.skills[0]}
          SkillB={this.data.skills[1]}
          SkillC={this.data.skills[2]}
          SkillD={this.data.skills[3]}
        />
        <Links
          linkA={this.data.links[0]}
          linkB={this.data.links[1]}
          linkC={this.data.links[2]}
          linkD={this.data.links[3]}
        />
      </>
    );
  }
}
export default Profile;
