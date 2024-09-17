import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");
  const [status, setStatus] = useState(false);
  return (
    <>
      {JSON.stringify(status)}
      <button onClick={() => setColor("orange")}>Change Color</button>
      <button onClick={() => setStatus(!status)}>Change Status</button>
      <div style={{ display: status ? "none" : "block" }}>
        <div style={{ width: 200, height: 200, backgroundColor: color }}>
          Content
        </div>
      </div>
    </>
  );
}

export default App;
