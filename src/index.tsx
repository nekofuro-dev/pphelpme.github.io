import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import "./styles.css";

const mountNode = document.getElementById("app");
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </HashRouter>,
  mountNode
);
