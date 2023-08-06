import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const { accessToken } = useAuthContext();

  if (accessToken === null) return <Navigate to="/signin" />;

  return <Outlet />;
}
