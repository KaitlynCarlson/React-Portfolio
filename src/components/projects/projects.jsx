import React from "react";
import Mothra from "./project imgs/mothra3.png";
import EmployeeDirectory from "./project imgs/icon512.png";
import BudgetTracker from "./project imgs/budgetIcon.png";
import "./style.css";

function Projects() {
  return (
    <div className="container" id="projects-header">
      <div>
        <h1 className="display-4">Projects</h1>
      </div>
      <div id="projects">
        <img src={Mothra} alt="Mothra Project" id="mothraImg" />
        <img src={BudgetTracker} alt="Budget Tracker" id="budgetTracker" />
        <img
          src={EmployeeDirectory}
          alt="Employee Directory"
          id="employeeDirectory"
        />
      </div>
    </div>
  );
}
export default Projects;
