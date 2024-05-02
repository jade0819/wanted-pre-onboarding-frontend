import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HttpClient } from "./apis/httpClient";
import { LocalStorage } from "./storage/localStorage";
import { AuthService } from "./service/AuthService";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const storage = new LocalStorage();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.store",
  storage
);
const authService = new AuthService(httpClient, storage);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authService}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
