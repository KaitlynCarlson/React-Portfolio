import React from "react";
import "./style.css";
import About from "../about/about";
import Contact from "../contact/contact";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
class DisplayCard extends React.Component {
  render() {
    let render;
    if (this.props.name === "about") {
      return (render = <About />);
    } else if (this.props.name === "contact") {
      return (render = <Contact />);
    } else if (this.props.name === "skills") {
      return (render = <Skills />);
    } else if (this.props.name === "projects") {
      return (render = <Projects />);
    } else if (this.props.name === "resume") {
      return (render = <Resume />);
    }
    return <React.Fragment>{render}</React.Fragment>;
  }
}
export default DisplayCard;
