import React from "react";
import Planet from "./Planet";
import Picker from "./Picker";

import planets from "./planets.json";

import "./App.css";

// Gravity measure: m/s²

function App() {
  const [currentActiveId, setCurrentActiveId] = React.useState(0);

  return (
    <div
      className="App"
      onClick={() => setCurrentActiveId((currentActiveId + 1) % planets.length)}
    >
      {planets.map((planet, id) => (
        <Planet
          key={planet.name}
          planet={planet}
          active={id === currentActiveId}
        />
      ))}
      <div className="picker-container">
        <Picker
          defaultActive={3}
          id="picker"
          items={planets.map(({ name }) => name)}
        />
      </div>
    </div>
  );
}

export default App;
