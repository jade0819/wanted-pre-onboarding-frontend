import React, { useCallback } from "react";
import Todo from "./Todo";
import { useAuthContext } from "../../context/AuthContext";
import { updateTodo, deleteTodo } from "../../apis/todoApi";

export default function TodoList({ todos, getTodos }) {
  const { accessToken: token } = useAuthContext();

  const handleToggle = useCallback(
    (editId, todo, isCompleted) => {
      updateTodo(token, editId, todo, isCompleted).then(() => {
        getTodos();
      });
    },
    [getTodos, token]
  );

  const handleUpdate = useCallback(
    (editId, todo, isCompleted) => {
      updateTodo(token, editId, todo, isCompleted).then(() => {
        getTodos();
      });
    },
    [getTodos, token]
  );

  const handleDelete = useCallback(
    (id) => {
      deleteTodo(token, id).then(() => {
        getTodos();
      });
    },
    [getTodos, token]
  );

  return (
    <ul className="h-[430px] mt-3 p-4 border border-black overflow-y-scroll">
      {todos.length > 0 &&
        todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            handleToggle={handleToggle}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
}
