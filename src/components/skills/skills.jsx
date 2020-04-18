import React from "react";
import Technologies from "./technologiestransparent.png";
import "./style.css";

function Skills() {
  return (
    <div id="content">
      <div className="card text-white bg-dark display-card">
        <div className="card-header">
          <div className="header-container">
            <h1 className="lead" id="skills-header">
              Skills
            </h1>
          </div>
        </div>
        <div className="row skills-row">
          <div className="card-body col-4">
            <p>React</p>
            <p>Node.js</p>
          </div>
          <div className="card-body col-lg-4">
            <p>MERN Stack</p>
            <p>SQL & MongoDB</p>
          </div>
          <div className="card-body col-lg-4">
            <p>jQuery</p>
            <p>Express</p>
          </div>
        </div>
        <div className="card text-white bg-dark display-card">
          <div className="card-header">
            <div className="header-container">
              <h1 className="lead" id="languages-header">
                Languages
              </h1>
            </div>
          </div>
          <div className="row languages-row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-body">
                <i className="fab fa-html5 fa-5x icon"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-body">
                {" "}
                <i className="fab fa-css3-alt fa-5x icon"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card-body">
                <i className="fab fa-js-square fa-5x icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-white bg-dark display-card">
          <div className="card-header">
            <div className="header-container">
              <h1 className="lead" id="technologies-header">
                Technologies
              </h1>
            </div>
          </div>
          <img alt="Technologies" src={Technologies} id="technologies" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
