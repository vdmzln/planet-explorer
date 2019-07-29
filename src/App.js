import React from "react";
import Planet from "./Planet";
import Picker from "./Picker";

import planets from "./planets.json";

import "./App.css";

const DEFAULT_ACTIVE_PLANET = 4;

function App() {
  const [currentActiveId, setCurrentActiveId] = React.useState(
    DEFAULT_ACTIVE_PLANET
  );

  return (
    <div className="App">
      {planets.map((planet, id) => (
        <Planet
          key={planet.name}
          planet={planet}
          active={id === currentActiveId}
        />
      ))}
      <div className="picker-container">
        <Picker
          defaultActive={currentActiveId}
          id="picker"
          items={planets.map(({ name }) => name)}
          onClick={params => {
            setCurrentActiveId(params.current);
          }}
        />
      </div>
    </div>
  );
}

export default App;
