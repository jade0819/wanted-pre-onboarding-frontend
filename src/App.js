import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import TodoPage from "./pages/todo/TodoPage";
import PublicRoute from "./pages/redirect/PublicRoute";
import PrivateRoute from "./pages/redirect/PrivateRoute";
import { PATH_NAME } from "./constants/routes";

export default function App() {
  const { SIGNIN, SIGNUP, TODOS } = PATH_NAME;

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={SIGNIN} element={<AuthPage />} />
        <Route path={SIGNUP} element={<AuthPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate replace to={TODOS} />} />
        <Route path={TODOS} element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
