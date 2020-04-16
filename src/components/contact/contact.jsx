import React from "react";
import PersonalPhoto from "./personalphoto.jpg";
import "./style.css";

function Contact() {
  return (
    <div className="card text-white bg-dark contact-card" id="display-card">
      <img
        src={PersonalPhoto}
        alt="Personal Photo"
        height="300px"
        width="300px"
        id="photo"
      />
      <div class="text">
        <div className="card-header">
          <h1 className="lead" id="header">
            Contact
          </h1>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="row item">
              <i class="far fa-envelope fa-1x link" id="email"></i>

              <p className="lead" className="tidbit">
                KaitlynAnneCarlson@gmail.com
              </p>
            </div>
            <div className="row item">
              <i class="fab fa-github fa-1x link" id="githubrepo"></i>
              <p className="lead" className="tidbit">
                GitHub Profile
              </p>
            </div>
            <div className="row item">
              <i class="fab fa-linkedin-in fa-1x link" id="linkedin"></i>
              <p className="lead" className="tidbit">
                LinkedIn Profile
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default Contact;
