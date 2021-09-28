import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/globals.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
