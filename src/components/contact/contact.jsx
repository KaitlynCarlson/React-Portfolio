import React from "react";
import PersonalPhoto from "./personalphoto.jpg";
import "./style.css";

function Contact() {
  return (
    <div
      className="card column text-white bg-dark contact-card container-fluid "
      id="display-card"
    >
      <img
        src={PersonalPhoto}
        alt="Kaitlyn Carlson"
        height="300px"
        width="300px"
        id="photo"
      />
      <div className="text ">
        <div className="card-header">
          <h1 className="display-5" id="contactheader">
            Contact
          </h1>
          <h3 className="lead"> 📍 Based in Seattle, WA</h3>
        </div>
        <div className="card-body contactContent">
          <blockquote className="blockquote mb-0">
            <div className="row item">
              <a href="mailto:kaitlynannecarlson@gmail.com">
                <i className="far fa-envelope fa-1x link" id="email"></i>
              </a>

              <p className="lead tidbit" id="email">
                KaitlynAnneCarlson@gmail.com
              </p>
            </div>
            <div className="row item">
              <i
                className="fab fa-github fa-1x link"
                id="githubrepo"
                onClick={() => {
                  window.open("https://github.com/KaitlynCarlson");
                }}
              ></i>
              <p className="lead tidbit">GitHub Profile</p>
            </div>
            <div className="row item">
              <i
                className="fab fa-linkedin-in fa-1x link"
                id="linkedin"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/kaitlynannecarlson/"
                  );
                }}
              ></i>
              <p className="lead tidbit">LinkedIn Profile</p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default Contact;
