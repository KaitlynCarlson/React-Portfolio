import React from "react";
import Mothra from "./project imgs/mothra3.png";
import EmployeeDirectory from "./project imgs/icon512.png";
import BudgetTracker from "./project imgs/budgetIcon.png";
import "./style.css";

function Projects() {
  return (
    <div className="container" id="projects-header">
      <div id="projects">
        <div className="projectContainer">
          <img src={Mothra} alt="Mothra Project" id="mothraImg" />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>
          <h1>Mothra Project Management</h1>
          <p>
            Mothra allows teams to track their project development progress.
            This app utilizes a myriad of technologies in an effort to provide
            users with good visibility of work status and develop more
            effectively
          </p>
        </div>
        <div className="projectContainer">
          <img src={BudgetTracker} alt="Budget Tracker" id="budgetTracker" />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>

          <h1>Budget Tracker PWA</h1>

          <p>
            Installable Budget Tracker PWA with offline and online capabilities.
            Much of this application was built during an in-class activity
            during the University of Washington Full-stack Web Development
            Bootcamp. In this rendition we were tasked with creating a Service
            Worker and Manifest in order to make this application a PWA.
          </p>
        </div>
        <div className="projectContainer">
          <img
            src={EmployeeDirectory}
            alt="Employee Directory"
            id="employeeDirectory"
          />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>

          <h1>React Employee Directory</h1>
          <p>
            An employee directory built with React in which employees can be
            searched by date of birth or by their name. Employee data can be
            sorted by date of birth or alphabetically.
          </p>
        </div>

        <div className="projectContainer">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/02/10/49/burger-304707_960_720.png"
            alt="Eat Da Burger"
            id="burger"
          />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>

          <h1>Eat Da Burger App</h1>
          <p>
            An interactive application using MySQL, Node, Express, Handlebars,
            and a custom ORM utilizing the MVC design pattern. Users can create
            burgers, devour burgers, and prep burgers!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;
