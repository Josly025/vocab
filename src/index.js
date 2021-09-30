import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Def from "./components/Def";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Def />
  </React.StrictMode>,
  document.getElementById("root")
);
