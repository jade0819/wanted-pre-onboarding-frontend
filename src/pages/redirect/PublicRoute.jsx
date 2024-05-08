import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import { PATH_NAME } from "../../constants/routes";

export default function PublicRoute() {
  const { isLogin } = useAuth();

  if (isLogin()) return <Navigate to={PATH_NAME.TODOS} />;

  return <Outlet />;
}
