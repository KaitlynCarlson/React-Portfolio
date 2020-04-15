import React from "react";
import Navigation from "../components/navigation/navigation";
import Cat from "../components/cat/cat";
import DisplayCard from "../components/displayCard/displayCard";
import "./style.css";
const Home = () => (
  <div>
    <div id="wrapper">
      <Navigation />
      <div className="container" id="content-container">
        <Cat />
        <DisplayCard />
      </div>
    </div>
  </div>
);
export default Home;
