import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function PublicRoute() {
  const { isToken } = useAuth();

  if (isToken) return <Navigate to="/todo" />;

  return <Outlet />;
}
