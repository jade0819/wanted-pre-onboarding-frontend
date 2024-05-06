import React from "react";
import AddTodo from "../../components/todo/AddTodo";
import { useTodo } from "../../context/TodoContext";
import TodoItem from "../../components/todo/TodoItem";

export default function Todos() {
  const { todos, isErrorTodos } = useTodo();
  const todosLength = todos.length;

  return (
    <>
      <div className="container">
        <h1 className="title">Just Do it!</h1>
        <AddTodo />
        <h3 className="mt-10 font-bold">To do</h3>
        <ul
          className={`max-h-todo flex flex-col gap-3 mt-2 overflow-y-auto ${
            todos.length > 3 ? "pr-3" : "pr-0"
          }`}
        >
          {isErrorTodos ? (
            <span className="text-center">
              리스트를 가져오는데 실패하였습니다.
            </span>
          ) : (
            todosLength > 0 &&
            todos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todo={item.todo}
                isCompleted={item.isCompleted}
              />
            ))
          )}
        </ul>
      </div>
      <span className="fixed bottom-0 w-full h-12 flex items-center justify-center bg-primary text-base">
        {todosLength > 0
          ? `You have ${todosLength} items on your list`
          : "Ready to go 🚀"}
      </span>
    </>
  );
}
