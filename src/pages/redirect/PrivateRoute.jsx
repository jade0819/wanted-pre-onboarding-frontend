import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const { isToken } = useAuth();

  if (!isToken) return <Navigate to="/signin" />;

  return <Outlet />;
}
