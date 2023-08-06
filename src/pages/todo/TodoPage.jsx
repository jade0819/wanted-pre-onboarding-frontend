import React, { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const { accessToken: token } = useAuthContext();

  const { removeToken } = useAuthContext();

  const handleClick = () => {
    removeToken();
  };

  const getTodos = useCallback(() => {
    if (token) {
      setTodos("성공!!!!");
    }
  }, [token]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="w-full max-w-[600px] justify-center px-1">
      <div className="text-right mb-1">
        <button onClick={handleClick}>로그아웃</button>
      </div>

      <div className="w-full h-[520px] p-4 bg-white">{todos}</div>
    </div>
  );
}
