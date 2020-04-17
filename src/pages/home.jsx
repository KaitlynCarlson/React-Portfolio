import React from "react";
import Navigation from "../components/navigation/navigation";
import DisplayCard from "../components/displayCard/displayCard";
import "./style.css";
function Home(props) {
  return (
    <div>
      <div id="wrapper">
        <Navigation onClick={props.handleNavigation} name={props.name} />
        <div className="container" id="content-container">
          <DisplayCard />
        </div>
      </div>
    </div>
  );
}
export default Home;
