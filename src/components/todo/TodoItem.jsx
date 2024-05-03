import React, { useState } from "react";
import useUserInput from "../../hooks/todo/useUserInput";
import { useTodo } from "../../context/TodoContext";

function TodoItem({ id, todo, isCompleted }) {
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
    <li className="flex justify-between gap-2 p-2">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onChangeCheckBox}
      />
      <input
        className="flex items-center w-full px-2 border rounded-md"
        type="text"
        value={userInput}
        onChange={(e) => saveUserInput(e.target)}
        data-testid="modify-input"
        placeholder="할 일을 입력해주세요."
        disabled={!isEditMode}
      />
      {isEditMode || (
        <div className="flex min-w-[100px]">
          <button
            onClick={() => setIsEditMode(true)}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            className="ml-1"
            onClick={() => deleteTodo(id)}
            data-testid="delete-button"
          >
            삭제
          </button>
        </div>
      )}
      {isEditMode && (
        <div className="flex flex-1 min-w-[100px]">
          <button onClick={onSubmit} data-testid="submit-button">
            제출
          </button>
          <button
            className="ml-1"
            onClick={onCancelEdit}
            data-testid="cancel-button"
          >
            취소
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
