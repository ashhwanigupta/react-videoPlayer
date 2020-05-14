import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/reactjs">
        <h1>React JS course</h1>
      </Link>
      <Link to="/rust">
        <h1>RUST Gameplay </h1>
      </Link>
    </div>
  );
}

export default Home;
