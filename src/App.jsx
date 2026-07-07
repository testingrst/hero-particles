import "./App.css";
import { Medusae } from "../packages/medusae/src";
import "../packages/medusae/src/medusae.css";

const config = {
  background: {
    color: "#ffffff",
  },
  particles: {
    colorBase: "#006DBD",
    colorOne: "#125E3E",
    colorTwo: "#61B6EB",
    colorThree: "#8BE9C1",
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
