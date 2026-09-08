import React, { useState } from "react";
import "./App.css";

const BULB_ON_IMAGE_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_IMAGE_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`App ${isOn ? "bg-on" : "bg-off"}`}
      style={{
        backgroundColor: isOn ? "yellow" : undefined,
      }}
    >
      <div className="panel">
      <header className="header">
        <h1>🟡 Bulb is {isOn ? "ON" : "OFF"}</h1>
      </header>

      <section>
        <img
          className={isOn ? "bulb glow" : "bulb"}
          src={isOn ? BULB_ON_IMAGE_URL : BULB_OFF_IMAGE_URL}
          alt="bulb"
          width="200"
          style={{
            filter: isOn
              ? "drop-shadow(0 0 35px rgba(89, 0, 244, 1))"
              : "none",
          }}
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
