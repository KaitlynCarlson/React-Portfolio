import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
