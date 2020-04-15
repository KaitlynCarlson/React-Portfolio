import React from "react";
import "./style.css";
function Navigation() {
  return (
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Kaitlyn Carlson
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
  );
}
export default Navigation;
