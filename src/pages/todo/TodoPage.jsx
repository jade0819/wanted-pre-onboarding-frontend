import React from "react";
import { useAuth } from "../../context/AuthContext";
import AddTodo from "../../components/todo/AddTodo";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constants/routes";
import { useTodo } from "../../context/TodoContext";
import TodoItem from "../../components/todo/TodoItem";

export default function Todos() {
  const { logout } = useAuth();
  const { todos, isErrorTodos } = useTodo();

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate(PATH_NAME.SIGNIN);
  };

  return (
    <div className="w-full max-w-[600px] justify-center px-1">
      <div className="text-right mb-1">
        <button onClick={onLogout}>로그아웃</button>
      </div>
      <div className="flex flex-col w-full h-[520px] p-4 bg-white">
        <AddTodo />
        <ul className="h-[430px] mt-3 p-4 border border-black overflow-y-scroll">
          {isErrorTodos && (
            <span className="text-red-600">
              리스트를 가져오는데 실패했습니다.
            </span>
          )}
          {!(isErrorTodos || todos.length === 0) &&
            todos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todo={item.todo}
                isCompleted={item.isCompleted}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
