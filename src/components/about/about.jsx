import React from "react";
import "./style.css";

function About() {
  return (
    <div className="card text-white bg-dark aboutCard " id="display-card">
      <div className="card-header">
        <h1
          className="lead"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: " 24px",
          }}
        >
          The Tidbits{" "}
        </h1>
      </div>

      <div className="card-body" id="about">
        <blockquote className="blockquote mb-0">
          <div className="row item aboutItems">
            <i className="far fa-check-square fa-1x check"></i>
            <p className="lead tidbit">Cat obsessed, beer enthusiast.</p>
          </div>
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
      <div id="divider">
        <div>
          <img
            alt="Content Divider"
            src="https://p1.pxfuel.com/preview/642/836/892/aloe-cactus-rotate-queen.jpg"
            id="divider"
            className="animated swing delay-2s"
          />
        </div>
      </div>
      <div className="card-header">
        <h1
          className="lead"
          id="aboutPara"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: " 24px",
          }}
        >
          The Meat and Potatoes
        </h1>
      </div>
      <div className="card-body">
        <p className="lead">
          Versatile skills in idea synthesis, creative problem solving, and the
          ability to thrive in high-pressure environments.
          <br />
          <br /> Ambitious Software Engineer with a certificate in Full Stack
          Web Development from the University of Washington, as well as a
          Bachelor of Arts in English from Bloomsburg University of
          Pennsylvania. Previous work experience has been focused in marketing
          and customer facing roles which enables my development of useful
          applications that have a strong focus on consumer needs and desires.{" "}
          <br />
          <br />
          Technical skills in the MERN stack with knowledge of both SQL and
          NoSQL databases. Proven track record of effective collatoration with a
          team to achieve optimal results. Mothra Project Management Tracker is
          one such project that utilizes JavaScript, NodeJS and a SQL database
          to create a useful and effective project management tool for users. An
          application that easily organizes projects, tasks and teams while
          tracking task status with ChartJS.
        </p>
      </div>
    </div>
  );
}
export default About;
