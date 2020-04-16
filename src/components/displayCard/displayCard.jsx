import React from "react";
import "./style.css";
// import About from "../about/about";
// import Contact from "../contact/contact";
// import Skills from "../skills/skills";
// import Projects from "../projects/projects";
import Resume from "../resume/resume";
class DisplayCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <About />
        <Skills />
        <Contact /> */}
        {/* <Projects /> */}
        <Resume />
      </React.Fragment>
    );
  }
}
export default DisplayCard;
