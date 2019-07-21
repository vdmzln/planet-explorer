import React from "react";
import Planet from "./Planet";

import planets from "./planets.json";

import "./App.css";

// Gravity measure: m/s²

function App() {
  return (
    <div className="App">
      {planets.map((planet, id) => (
        <Planet key={planet.name} planet={planet} active={id === 0} />
      ))}
    </div>
  );
}

export default App;
