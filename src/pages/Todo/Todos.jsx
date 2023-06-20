import React, { useCallback, useEffect, useState } from "react";
import { getTodos as fetchGetTodos } from "../../apis/todoApi";
import { useAuthContext } from "../../context/AuthContext";
import TodoList from "../../components/Todo/TodoList";
import AddTodo from "../../components/Todo/AddTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const { accessToken: token } = useAuthContext();

  const { removeToken } = useAuthContext();

  const handleClick = () => {
    removeToken();
  };

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
    <div>
      <div className="text-right mb-1">
        <button onClick={handleClick}>로그아웃</button>
      </div>

      <div className="w-[600px] h-[520px] p-4 bg-white">
        <div>
          <AddTodo getTodos={getTodos} />
        </div>
        <TodoList todos={todos} getTodos={getTodos} />
      </div>
    </div>
  );
}
