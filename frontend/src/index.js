import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
