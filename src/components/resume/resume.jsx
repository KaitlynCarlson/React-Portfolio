import React from "react";
import "./style.css";
function Resume() {
  return (
    <div>
      <a
        href="./KaitlynCarlson.pdf"
        download
        className="btn btn-primary btn-xl d-flex"
        id="download-resume-anchor"
      >
        Download
      </a>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQ9IIHA54yahXq0fJtvsP15AgTeUv8DQQ0vrpaOFYQLYU1iFOyMOIlM5p3pyjH5KL3N8t6mbLzQ_Cpo/pub?embedded=true"
        width="900px"
        height="925px"
        id="resume"
        title="Kaitlyn Carlson Resume"
        className="animated  zoomIn delay-2"
      ></iframe>
    </div>
  );
}
export default Resume;
