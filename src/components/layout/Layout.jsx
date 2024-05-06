import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constants/routes";

export default function Layout({ children }) {
  const { logout, isLogin } = useAuth();

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate(PATH_NAME.SIGNIN);
  };

  return (
    <>
      <nav className="w-full h-nav flex items-center justify-end px-4 bg-primary">
        {isLogin() ? (
          <button
            className="btn bg-primary text-white border"
            onClick={onLogout}
          >
            로그아웃
          </button>
        ) : (
          <Link
            to={PATH_NAME.SIGNIN}
            className="btn bg-primary text-white border"
          >
            로그인
          </Link>
        )}
      </nav>
      {children}
    </>
  );
}
