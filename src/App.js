import React from "react";
import Planet from "./Planet";

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
    </div>
  );
}

export default App;
