import './App.css';
import AskDoubt from './pages/askDoubt/AskDoubt';
import SolveDoubt from './pages/solveDoubt/SolveDoubt';

function App() {
  return (
    <div className="App">
      <header className='header'>
       Vortex
      </header>
      <section className='hero-section'>
        <div>
          Ask a Doubt
        </div>
        <div>
          Solve Doubt
        </div>
      </section>
      <AskDoubt/>
      <SolveDoubt/>
    </div>
  );
}

export default App;
