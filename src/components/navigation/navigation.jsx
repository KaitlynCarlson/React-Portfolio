import React from "react";
import Name from "../Name/name";
import Cat from "../cat/cat";
import "./style.css";
function Navigation() {
  return (
    <div id="navigation-container">
      <Cat />

      <Name />
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className=" navbar-expand" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;
