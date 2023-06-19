import React from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function TodoList() {
  const { removeToken } = useAuthContext();

  const handleClick = () => {
    removeToken();
  };

  return (
    <div className="text-blue-400">
      투두리스트
      <br />
      <button onClick={handleClick}>로그아웃</button>
    </div>
  );
}
