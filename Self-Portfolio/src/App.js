import React, { useEffect } from "react";
import "./App.css";
import ContentHeader from "./ContentHeader";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // App Title
  useEffect(() => {
    document.title = "Portfolio - Hongdi LAI";
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <div className="app__content">
            <ContentHeader />
            <div className="app__contentBody">
              <Switch>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/">
                  <About />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
