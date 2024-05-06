import React, { useState } from "react";
import useUserInput from "../../hooks/todo/useUserInput";
import { useTodo } from "../../context/TodoContext";
import { FaPen, FaTrash, FaTimes, FaCheck } from "react-icons/fa";

export default function TodoItem({ id, todo, isCompleted }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const { userInput, saveUserInput, cancelUserInput } = useUserInput(todo);

  const { updateTodo, deleteTodo } = useTodo();

  const onChangeCheckBox = () => {
    updateTodo(id, todo, !isCompleted);
  };

  const onSubmit = () => {
    updateTodo(id, userInput, isCompleted);
    setIsEditMode(false);
  };

  const onCancelEdit = () => {
    cancelUserInput();
    setIsEditMode(false);
  };

  return (
    <li className="flex justify-between gap-6 px-4 py-6 bg-tertiary rounded-xl">
      <input
        className="w-6 accent-primary opacity-70"
        type="checkbox"
        checked={isCompleted}
        onChange={onChangeCheckBox}
      />
      <input
        className="input"
        type="text"
        value={userInput}
        onChange={(e) => saveUserInput(e.target)}
        data-testid="modify-input"
        placeholder="할 일을 입력해주세요."
        disabled={!isEditMode}
      />
      {isEditMode || (
        <div className="flex">
          <button
            className="btn primary"
            onClick={() => setIsEditMode(true)}
            data-testid="modify-button"
          >
            <FaPen />
          </button>
          <button
            className="btn primary ml-1"
            onClick={() => deleteTodo(id)}
            data-testid="delete-button"
          >
            <FaTrash />
          </button>
        </div>
      )}
      {isEditMode && (
        <div className="flex">
          <button
            className="btn primary"
            onClick={onSubmit}
            data-testid="submit-button"
          >
            <FaCheck />
          </button>
          <button
            className="btn primary ml-1"
            onClick={onCancelEdit}
            data-testid="cancel-button"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </li>
  );
}
