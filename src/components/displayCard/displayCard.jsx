import React from "react";
import "./style.css";
class DisplayCard extends React.Component {
  render() {
    return (
      <div className="card text-white bg-dark" id="display-card">
        <div className="card-header">
          <h1 className="lead" style={{ align: "center" }}>
            About
          </h1>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="row item">
              <i className="far fa-check-square fa-1x"></i>
              <p className="lead" className="tidbit">
                Ability to thrive in fast-paced, dynamic environment
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    );
  }
}
export default DisplayCard;
