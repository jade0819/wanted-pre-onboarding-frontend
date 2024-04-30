import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HttpClient } from "./apis/httpClient";
import { LocalStorage } from "./storage/localStorage";
import { AuthService } from "./service/AuthService";

const root = ReactDOM.createRoot(document.getElementById("root"));

const storage = new LocalStorage();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.store",
  storage
);
const authService = new AuthService(httpClient, storage);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
