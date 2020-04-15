import React from "react";
import Name from "../Name/name";
import "./style.css";
function Navigation() {
  return (
    <div id="navigation-container">
      <Name />
      <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class=" navbar-expand" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
