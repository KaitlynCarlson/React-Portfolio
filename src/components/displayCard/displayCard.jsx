import React from "react";
import "./style.css";
// import About from "../about/about";
// import Contact from "../contact/contact";
import Skills from "../skills/skills";
class DisplayCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <About /> */}
        <Skills />
        {/* <Contact /> */}
      </React.Fragment>
    );
  }
}
export default DisplayCard;
