import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HttpClient } from "./apis/httpClient";

const root = ReactDOM.createRoot(document.getElementById("root"));

const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.store",
  "storage"
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
