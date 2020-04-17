import React from "react";
import Navigation from "../components/navigation/navigation";
import "./style.css";
function Home(props) {
  return (
    <div>
      <div id="wrapper">
        <Navigation onClick={props.handleNavigation} name={props.name} />
      </div>
    </div>
  );
}
export default Home;
