import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <header className="header">Vortex</header>
      <section className="hero-section">
        <Link to="/askDoubt">
          <div>Ask a Doubt</div>
        </Link>

        <Link to="/solveDoubt">
          <div>Solve Doubt</div>
        </Link>
      </section>
    </div>
  );
}

export default Homepage;
