// App.jsx
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Sports Central</h1>
      </header>

      <div className="hero">
        <h2>Welcome to the Home of Sports</h2>
        <p>Track scores, fixtures, and highlights across all sports.</p>
      </div>

      <section className="section">
        <h3>Upcoming Matches</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Team A vs Team B</h4>
            <p>July 25th, 7:30 PM</p>
          </div>
          <div className="card">
            <h4>Team C vs Team D</h4>
            <p>July 26th, 5:00 PM</p>
          </div>
          <div className="card">
            <h4>Team E vs Team F</h4>
            <p>July 27th, 9:00 PM</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Featured Teams</h3>
        <div className="card-grid">
          <div className="card">
            <h4>The Hawks</h4>
            <p>Top of the league with 10 wins</p>
          </div>
          <div className="card">
            <h4>The Chargers</h4>
            <p>Fierce rivals, known for comeback games</p>
          </div>
          <div className="card">
            <h4>The Titans</h4>
            <p>Defending champions</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Sports Central. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
