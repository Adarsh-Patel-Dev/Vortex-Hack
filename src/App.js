import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskDoubt from "./pages/askDoubt/AskDoubt";
import SolveDoubt from "./pages/solveDoubt/SolveDoubt";
import Homepage from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <header className="header">VORTEX</header>

      {/* <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/askDoubt" element={<AskDoubt />} />
      <Route path="/solveDoubt" element={<SolveDoubt />} />


      </Routes> */}
      <section className="hero-section">
        <a href="#askDoubt">Ask a Doubt</a>
        <a href="#solveDOubt">Solve Doubt</a>
      </section>
      <section id="askDoubt">
        <AskDoubt />
      </section>
      <section id="solveDOubt">
        <SolveDoubt />
      </section>
    </div>
  );
}

export default App;
