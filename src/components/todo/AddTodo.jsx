import React, { useCallback } from "react";
import { createTodo } from "../../apis/todoApi";
import { useAuthContext } from "../../context/AuthContext";

export default function AddTodo({ getTodos }) {
  const { accessToken: token } = useAuthContext();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const value = e.target[0].value;
      if (!value || value.length <= 0) return;

      if (!token) throw new Error("Null Token!!");

      createTodo(token, value).then(() => getTodos());
      e.target.reset();
    },
    [getTodos, token]
  );

  return (
    <form className="flex w-full mb-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 mr-1"
        type="text"
        placeholder="오늘의 할 일을 작성해보세요."
        data-testid="new-todo-input"
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
