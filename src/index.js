import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HttpClient } from "./apis/httpClient";
import { LocalStorage } from "./storage/localStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const storage = new LocalStorage();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.store",
  storage
);

httpClient.fetch("/auth/signin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    email: "break0819@naver.com",
    password: "12345678",
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
