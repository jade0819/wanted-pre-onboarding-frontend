import { createContext, useContext } from "react";

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
}
