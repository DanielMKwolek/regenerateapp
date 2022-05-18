import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes} from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';

function App() {

  let [colorConfig, setColorConfig] = useState({
    lightShade: "#EBECEE",
    lightAccent: "#6BA7A8",
    mainBrand: "#747674",
    darkAccent: "#248EA9",
    darkShade: "#1C1A20"
  })

  document.getElementById('internalStyleSheet').innerHTML = (`
  :root {
    --light-shade: ${colorConfig.lightShade};
    --light-accent: ${colorConfig.lightAccent};
    --main-brand: ${colorConfig.mainBrand};
    --dark-accent: ${colorConfig.darkAccent};
    --dark-shade: ${colorConfig.darkShade};
  }
`);

const handleRegenerate = () => {
  fetch("http://colormind.io/api/", {
  method: "POST",
  body: JSON.stringify({
    model: "default",
    input: ["N","N","N","N",[28, 26, 32]]
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
}

  return (
    <div className="App bds">
      <p className="da fsm bds" onClick={handleRegenerate}><span className="fsl">R</span>EGENERATE</p>
      <main>
        <Routes>
          <Route path="/" element={<Home regen={handleRegenerate}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
