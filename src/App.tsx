import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        onClick={() => {
          console.log("button");
        }}
        className="button-test"
      >
        버튼
      </div>
    </div>
  );
}

export default App;
