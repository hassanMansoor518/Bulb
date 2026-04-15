import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`App ${isOn ? "bg-on" : "bg-off"}`}>
      <div className="panel">
      <header className="header">
        <h1>💡 Bulb is {isOn ? "ON" : "OFF"}</h1>
      </header>

      <section>
        <img
          className={isOn ? "bulb glow" : "bulb"}
          src={
            isOn
              ? "https://i.postimg.cc/6QyTynzr/bulb-on.png"
              : "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
          }
          alt="bulb"
          width="200"
        />

        <div className="toggle_container">
          <label className="switch">
            <input type="checkbox" checked={isOn} onChange={toggleBulb} />
            <span className="slider round"></span>
          </label>
        </div>
      </section>
      </div>
    </div>
  );
}

export default App;