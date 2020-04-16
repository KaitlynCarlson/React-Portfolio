import React from "react";
import "./style.css";
// import About from "../about/about";
// import Contact from "../contact/contact";
// import Skills from "../skills/skills";
import Projects from "../projects/projects";
class DisplayCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <About />
        <Skills />
        <Contact /> */}
        <Projects />
      </React.Fragment>
    );
  }
}
export default DisplayCard;
