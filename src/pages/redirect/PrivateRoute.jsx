import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import { PATH_NAME } from "../../constants/routes";

export default function PrivateRoute() {
  const { isLogin } = useAuth();

  if (!isLogin()) return <Navigate to={PATH_NAME.SIGNIN} />;

  return <Outlet />;
}
