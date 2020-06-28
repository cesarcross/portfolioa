import React from "react";

import "./App.css";

import Intro from "./components/Intro/Intro.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Contact from "./components/Contact/Contact.component";

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
