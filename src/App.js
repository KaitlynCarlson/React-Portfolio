import React from "react";
import Home from "./pages/home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/React-Portfolio" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
