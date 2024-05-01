import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTodos as fetchGetTodos } from "../../apis/todoApi";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const token = "access_token";

  const { removeToken } = useAuth();

  const getTodos = useCallback(() => {
    if (token) {
      fetchGetTodos(token).then((data) => {
        setTodos(data);
      });
    }
  }, [token]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="w-full max-w-[600px] justify-center px-1">
      <div className="text-right mb-1">
        <button onClick={removeToken}>로그아웃</button>
      </div>

      <div className="flex flex-col w-full h-[520px] p-4 bg-white">
        <AddTodo getTodos={getTodos} />
        <TodoList todos={todos} getTodos={getTodos} />
      </div>
    </div>
  );
}
