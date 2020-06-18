import React from "react";
import "./style.css";
function Resume() {
  return (
    <div>
      <a
        href="https://github.com/KaitlynCarlson/React-Portfolio/raw/master/src/components/resume/KaitlynCarlson.pdf"
        download
        className="btn btn-primary btn-xl d-flex"
        id="download-resume-anchor"
      >
        Download
      </a>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vT3xDD609cw2MwBzzexvIYYnhnDuVUqEESWDQXs79t3LOnNXDsZ3FVtn9dsWM3XM7LCgqBSwC6wRic5/pub?embedded=true"
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
