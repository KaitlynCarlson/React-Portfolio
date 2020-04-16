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
          <h1 className="display-4">Mothra Project Management</h1>
          <p>
            Mothra allows teams to track their project development progress.
            This app utilizes a myriad of technologies in an effort to provide
            users with good visibility of work status and develop more
            effectively.
            <br />
            <br />
            This project is a web application that allows a team to track their
            project development progress, issues, total number of tasks, and
            present that information in a web dashboard. Mothra allows users to
            create projects which are assigned to a team. A team consists of
            multiple users/employees. Users can also create tasks for a specific
            project. Each project consists of many tasks. Each task can be
            assigned to one user/employee, whose team is responsible for the
            project. Each task has state of (new, in-progress, complete,
            closed).
          </p>
          <br />
          <h4>Technologies</h4>
          <p>
            Bulma CSS | Chart.js | Express | Font Awesome | Handlebars |
            JavaScript | jQuery | MySQL | Sequelize
          </p>
        </div>
        <div className="projectContainer">
          <img src={BudgetTracker} alt="Budget Tracker" id="budgetTracker" />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>
          <h1 className="display-4">Budget Tracker PWA</h1>
          <p>
            Installable Budget Tracker PWA with offline and online capabilities.
            Much of this application was built during an in-class activity
            during the University of Washington Full-stack Web Development
            Bootcamp. In this rendition we were tasked with creating a Service
            Worker and Manifest in order to make this application a PWA.
          </p>
          <br />
          <h4>Technologies</h4>
          <p>
            JavaScript | IndexedDB | Express | MongoDB | Mongoose | Font Awesome
            | Bootstrap
          </p>
        </div>
        <div className="projectContainer">
          <img
            src={EmployeeDirectory}
            alt="Employee Directory"
            id="employeeDirectory"
          />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>

          <h1 className="display-4">React Employee Directory</h1>
          <p>
            An employee directory built with React in which employees can be
            searched by date of birth or by their name. Employee data can be
            sorted by date of birth or alphabetically.
          </p>
          <br />
          <h4>Technologies</h4>
          <p>React | JavaScript | Axios | Randomuser.me | Bootstrap</p>
        </div>

        <div className="projectContainer">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/02/10/49/burger-304707_960_720.png"
            alt="Eat Da Burger"
            id="burger"
          />
          <i className="fab fa-github fa-3x link" id="mothraRepo"></i>

          <h1 className="display-4">Eat Da Burger App</h1>
          <p>
            An interactive application using MySQL, Node, Express, Handlebars,
            and a custom ORM utilizing the MVC design pattern. Users can create
            burgers, devour burgers, and prep burgers!
          </p>
          <br />
          <h4>Technologies</h4>
          <p>
            Heroku | JAWS DB | JavaScript | Node.js | jQuery | MySQL |
            Express.js | Handlebars.js | Bootstrap | AOS
          </p>
        </div>
      </div>
      <div className="projectContainer" id="moreProjects">
        <h1 className="lead">More available on GitHub</h1>
        <i className="fab fa-github fa-2x link" id="personalRepo"></i>
      </div>
    </div>
  );
}
export default Projects;
