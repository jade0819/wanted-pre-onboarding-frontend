import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import TodoPage from "./pages/todo/TodoPage";
import PublicRoute from "./pages/redirect/PublicRoute";
import PrivateRoute from "./pages/redirect/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to="/todo" />} />
            <Route path="/todo" element={<TodoPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
