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
          <input
            type="checkbox"
            checked={editTodo.isCompleted}
            onChange={handleChangeCheckbox}
          />
          <div className="flex items-center w-full px-2">{item.todo}</div>
          <div className="flex flex-1 min-w-[100px]">
            <button onClick={() => setEditTodoId(item.id)}>수정</button>
            <button className="ml-1" onClick={() => handleDelete(item.id)}>
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
            className="flex items-center w-full px-2"
            type="text"
            value={editTodo.todo}
            onChange={handleChangeInput}
            placeholder="할 일을 입력해주세요."
          />
          <div className="flex flex-1 min-w-[100px]">
            <button className="mr-1" onClick={handleSubmit}>
              제출
            </button>
            <button onClick={handleCancel}>취소</button>
          </div>
        </li>
      )}
    </>
  );
}
