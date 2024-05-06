import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import withProvider from "./hocs/withProvider";
import Layout from "./components/layout/Layout";
import PublicRoute from "./pages/redirect/PublicRoute";
import PrivateRoute from "./pages/redirect/PrivateRoute";
import AuthPage from "./pages/auth/AuthPage";
import TodoPage from "./pages/todo/TodoPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import { PATH_NAME } from "./constants/routes";

export default function App({ todoService }) {
  const { SIGNIN, SIGNUP, TODOS } = PATH_NAME;

  const TodoPageWithTodoProvider = withProvider(
    TodoProvider,
    { todoService: todoService },
    TodoPage
  );

  return (
    <Layout>
      <div className="w-full h-full">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={SIGNIN} element={<AuthPage />} />
            <Route path={SIGNUP} element={<AuthPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to={TODOS} />} />
            <Route path={TODOS} element={<TodoPageWithTodoProvider />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Layout>
  );
}
