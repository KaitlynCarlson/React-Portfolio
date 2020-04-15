import React from "react";
import "./style.css";
function DisplayCard() {
  return (
    <div class="card text-white bg-dark" id="display-card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
export default DisplayCard;
