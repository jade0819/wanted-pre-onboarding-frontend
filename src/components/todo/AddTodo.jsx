import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { FaPlus } from "react-icons/fa";

function AddTodo() {
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
    <form
      className="w-full flex items-center justify-between pl-6 pr-3 py-1 bg-secondary rounded-[30px]"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full bg-secondary"
        type="text"
        value={newTodo}
        onChange={saveUserInput}
        data-testid="new-todo-input"
        placeholder="오늘의 할 일을 작성해보세요"
      />
      <button
        className="btn text-xl p-0 rounded-full transition duration-500 hover:rotate-90"
        type="submit"
        data-testid="new-todo-add-button"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddTodo;
