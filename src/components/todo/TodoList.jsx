import React from "react";

export default function TodoList({ todos, getTodos }) {
  return (
    <ul className="h-full p-4 border border-black overflow-y-auto">
      {todos.length > 0 && todos.map((item) => <span>{item.todo}</span>)}
    </ul>
  );
}
