import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';

function App() {

  let [colorConfig, setColorConfig] = useState({
    lightColor: "#EAE7E1",
    lightAccent: "#76AD82",
    mainBrandColor: "#773646",
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
      lightColor: `rgb(${data.result[0].join()})`,
      lightAccent: `rgb(${data.result[1].join()})`,
      mainBrandColor: `rgb(${data.result[2].join()})`,
      darkAccent: `rgb(${data.result[3].join()})`,
      darkShade: `rgb(${data.result[4].join()})`
    });
  })
  .catch(error => console.log(error));
  }, [])

  document.getElementById('internalStyleSheet').innerHTML = (`
  :root {
    --light-color: ${colorConfig.lightColor};
    --light-accent: ${colorConfig.lightAccent};
    --main-brand-color: ${colorConfig.mainBrandColor};
    --dark-accent: ${colorConfig.mainBrandColor};
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
