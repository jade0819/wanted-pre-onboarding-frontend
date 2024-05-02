import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  const { isLogin } = useAuth();

  const getTodos = () => {
    todoService.get().then((todos) => setTodos(todos));
  };

  useEffect(() => {
    if (isLogin()) {
      todoService.get().then((todos) => setTodos(todos));
    }
  }, [isLogin, todoService, setTodos]);

  const createTodo = (newTodo) => {
    todoService
      .create(newTodo)
      .then((data) => setTodos((prevTodos) => [...prevTodos, data]));
  };

  const updateTodo = (todoId, newTodo, isCompleted) => {
    todoService
      .update(todoId, newTodo, isCompleted)
      .then((data) =>
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === data.id
              ? { ...todo, todo: data.todo, isCompleted: data.isCompleted }
              : todo
          )
        )
      );
  };

  const deleteTodo = (todoId) => {
    todoService
      .delete(todoId)
      .then(
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
      );
  };

  return (
    <TodoContext.Provider
      value={{ todos, getTodos, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
