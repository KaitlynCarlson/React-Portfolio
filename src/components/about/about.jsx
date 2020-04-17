import React from "react";
import "./style.css";

function About() {
  return (
    <div className="card text-white bg-dark aboutCard" id="display-card">
      <div className="card-header">
        <h1
          className="lead"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: " 24px",
          }}
        >
          About
        </h1>
      </div>
      <div className="card-body" id="about">
        <blockquote className="blockquote mb-0">
          <div className="row item aboutItems">
            <i className="far fa-check-square fa-1x check"></i>
            <p className="lead tidbit">
              Ability to thrive in fast-paced, dynamic environment.
            </p>
          </div>
          <div className="row item aboutItems">
            <i className="far fa-check-square fa-1x check"></i>
            <p className="lead tidbit">
              Desire to learn, grow, and evolve through challenges.
            </p>
          </div>
          <div className="row item aboutItems">
            <i className="far fa-check-square fa-1x check"></i>
            <p className="lead tidbit">Tireless work ethic.</p>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
export default About;
