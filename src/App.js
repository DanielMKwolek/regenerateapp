import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';

function App() {

  let [colorConfig, setColorConfig] = useState({
    lightShade: "#EAE7E1",
    lightAccent: "#76AD82",
    mainBrand: "#773646",
    darkAccent: "#807A72",
    darkShade: "#18191A"
  })

  useEffect(() => {
  fetch("http://colormind.io/api/", {
  method: "POST",
  body: JSON.stringify({
    model: "default",
    input: ["N","N","N","N","N"]
  })
})
  .then(response => response.json())
  .then(data => {
    setColorConfig({
      lightShade: `rgb(${data.result[2].join()})`,
      lightAccent: `rgb(${data.result[1].join()})`,
      mainBrand: `rgb(${data.result[0].join()})`,
      darkAccent: `rgb(${data.result[3].join()})`,
      darkShade: `rgb(${data.result[4].join()})`
    });
  })
  .catch(error => console.log(error));
  }, [])

  document.getElementById('internalStyleSheet').innerHTML = (`
  :root {
    --light-shade: ${colorConfig.lightShade};
    --light-accent: ${colorConfig.lightAccent};
    --main-brand: ${colorConfig.mainBrand};
    --dark-accent: ${colorConfig.darkAccent};
    --dark-shade: ${colorConfig.darkShade};
  }
`);


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
