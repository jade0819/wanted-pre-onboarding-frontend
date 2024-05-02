import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const saveUserInput = (e) => setNewTodo(e.target.value);

  const { createTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo || newTodo.length <= 0) return;

    createTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="flex w-full mb-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 mr-1 border rounded-md"
        type="text"
        value={newTodo}
        onChange={saveUserInput}
        data-testid="new-todo-input"
        placeholder="오늘의 할 일을 작성해보세요."
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
