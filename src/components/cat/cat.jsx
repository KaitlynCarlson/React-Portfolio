import React from "react";
import cat from "./cat3.png";
function Cat() {
  return (
    <img
      alt="cat-icon"
      src={cat}
      height="50px"
      className="animated  swing delay-1s"
    />
  );
}
export default Cat;
