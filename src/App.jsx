import "./App.css";
import { Medusae } from "../packages/medusae/src";
import "../packages/medusae/src/medusae.css";

const config = {
  background: {
    color: "#ffffff",
  },
  particles: {
    colorBase: "#0000ff",
    colorOne: "#4285f5",
    colorTwo: "#eb4236",
    colorThree: "#faba03",
  },
  cursor: {
    radius: 0.065,
    strength: 3,
    dragFactor: 0.015,
  },
};

function App() {
  return (
    <div className="app">
      <Medusae config={config} />
    </div>
  );
}

export default App;
