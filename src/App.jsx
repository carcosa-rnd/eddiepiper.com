import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./styles/globals.scss";

function App() {
  const [currentSection, setCurrentSection] = useState("Hem");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      let curr = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
          curr = section.getAttribute("id");
        } else if (window.pageYOffset > 4260) {
          curr = "Kontakt";
        }
      });

      setCurrentSection(curr);
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <Router>
      <Nav currentSection={currentSection} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
