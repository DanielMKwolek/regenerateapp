import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';

function App() {

  let [colorConfig, setColorConfig] = useState({})

  useEffect(() => {
  fetch("http://colormind.io/api/", {
  method: "POST",
  body: JSON.stringify({
    model: "default",
    input: ["N","N","N","N","N"]
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
