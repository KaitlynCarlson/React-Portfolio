import React from "react";
import Name from "../Name/name";
import Cat from "../cat/cat";
import "./style.css";
import DisplayCard from "../displayCard/displayCard";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "about",
    };
  }
  handleNavigation = (event) => {
    event.preventDefault();
    const renderComponent = event.target.name;
    this.setState({ page: renderComponent });
  };

  render() {
    return (
      <div>
        <div id="navigation-container">
          <Cat />
          <Name />
          <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className=" navbar-expand" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    name="about"
                    onClick={this.handleNavigation}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.handleNavigation}
                    className="nav-link"
                    href="/projects"
                    name="projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.handleNavigation}
                    className="nav-link"
                    href="/skills"
                    name="skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.handleNavigation}
                    className="nav-link"
                    href="/resume"
                    name="resume"
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.handleNavigation}
                    className="nav-link"
                    href="/contact"
                    name="contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container" id="content-container">
          <DisplayCard name={this.state.page} />
        </div>
      </div>
    );
  }
}
export default Navigation;
