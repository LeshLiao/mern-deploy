import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("https://mern-deploy-backend-levi.onrender.com/")
    .then(res => res.json())
    .then(data => setMessage(data.message))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
