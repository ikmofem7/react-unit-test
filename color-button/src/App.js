import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [isDisabled, setIsDiabled] = useState();
  const updateBtnColor = btnColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        style={{ background: isDisabled ? "gray" : btnColor }}
        onClick={() => {
          setBtnColor(updateBtnColor);
        }}
        disabled={isDisabled}
      >
        Change to {updateBtnColor}
      </button>
      <br />
      <input
        type="checkbox"
        onChange={(e) => setIsDiabled(e.target.checked)}
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
