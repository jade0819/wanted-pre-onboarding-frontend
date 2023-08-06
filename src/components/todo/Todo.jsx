import React, { useState } from "react";
import { compareObject } from "../../utils/compare";

export default function Todo({
  item,
  handleToggle,
  handleUpdate,
  handleDelete,
}) {
  const [editTodo, setEditTodo] = useState({ ...item });
  const [editTodoId, setEditTodoId] = useState(-1);

  const handleChangeCheckbox = (e) => {
    setEditTodo((beforeTodo) => {
      return { ...beforeTodo, isCompleted: e.target.checked };
    });

    if (editTodoId === -1) {
      handleToggle(item.id, item.todo, e.target.checked);
    }
  };

  const handleChangeInput = (e) => {
    setEditTodo((beforeTodo) => {
      return { ...beforeTodo, todo: e.target.value };
    });
  };

  const handleCancel = () => {
    setEditTodoId(-1);
    setEditTodo(item);
  };

  const handleSubmit = () => {
    setEditTodoId(-1);
    if (!compareObject(item, editTodo))
      handleUpdate(editTodoId, editTodo.todo, editTodo.isCompleted);
  };

  return (
    <>
      {item.id !== editTodoId ? (
        <li className="flex justify-between gap-2 p-2">
          <label className="flex w-full">
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={editTodo.isCompleted}
              onChange={handleChangeCheckbox}
            />
            <span className="flex items-center w-full px-2">{item.todo}</span>
          </label>
          <div className="flex min-w-[100px]">
            <button
              onClick={() => setEditTodoId(item.id)}
              data-testid="modify-button"
            >
              수정
            </button>
            <button
              className="ml-1"
              onClick={() => handleDelete(item.id)}
              data-testid="delete-button"
            >
              삭제
            </button>
          </div>
        </li>
      ) : (
        <li className="flex justify-between gap-2 p-2">
          <input
            type="checkbox"
            checked={editTodo.isCompleted}
            onChange={handleChangeCheckbox}
          />
          <input
            className="flex items-center w-full px-2 border rounded-md"
            type="text"
            value={editTodo.todo}
            onChange={handleChangeInput}
            placeholder="할 일을 입력해주세요."
            data-testid="modify-input"
          />
          <div className="flex flex-1 min-w-[100px]">
            <button
              className="mr-1"
              onClick={handleSubmit}
              data-testid="submit-button"
            >
              제출
            </button>
            <button onClick={handleCancel} data-testid="cancel-button">
              취소
            </button>
          </div>
        </li>
      )}
    </>
  );
}
