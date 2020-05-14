import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import CourseStructure from "./Components/CourseStructure";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:coursename" component={CourseStructure} />
      </Router>
    </div>
  );
}

export default App;
