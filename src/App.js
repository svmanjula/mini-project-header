import "./App.css";

function App() {
  return (
    <div className="App">
        <header>
          <ul className="nav">
            <li>Tutorials</li>
            <li>References</li>
            <li>Exercises</li>
            <li>Videos</li>
          </ul>
          <ul className="nav2">
            <li style={{ backgroundColor: "black", color: "white" }}>Pro</li>
            <li style={{ backgroundColor: "pink" }}>Get Certified</li>
            <li style={{ backgroundColor: "yellow" }}>Free website</li>
            <li style={{ backgroundColor: "green", color: "white" }}>Log in</li>
          </ul>
        </header>
    </div>
  );
}

export default App;
