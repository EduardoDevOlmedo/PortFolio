import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import Bio from "./components/Biography.jsx";
import { Presentation } from "./components/Presentation";
import '../src/styles.css';

function App() {
  return (
    <Router>
      <div>
        <ParticleComponent />
        <Presentation />
      </div>
        <Bio />
        <Bio />
    </Router>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
