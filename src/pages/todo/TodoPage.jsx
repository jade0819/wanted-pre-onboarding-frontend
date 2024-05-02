import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTodos as fetchGetTodos } from "../../apis/todoApi";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constants/routes";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const token = "access_token";

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate(PATH_NAME.SIGNIN);
  };

  const getTodos = useCallback(() => {
    if (token) {
      fetchGetTodos(token).then((data) => {
        setTodos(data);
      });
    }
  }, [token]);

  // useEffect(() => {
  //   getTodos();
  // }, [getTodos]);

  return (
    <div className="w-full max-w-[600px] justify-center px-1">
      <div className="text-right mb-1">
        <button onClick={handleClickLogout}>로그아웃</button>
      </div>

      <div className="flex flex-col w-full h-[520px] p-4 bg-white">
        <AddTodo getTodos={getTodos} />
        <TodoList todos={todos} getTodos={getTodos} />
      </div>
    </div>
  );
}
