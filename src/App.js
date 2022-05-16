import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom"

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
      <main>
        <Routes>
          <Route path="/" element={<h1>Hello World!</h1>} />
          <Route path="/about" element={<h1>And this is where I'd put an about component< br/>IF I HAD ONE</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
