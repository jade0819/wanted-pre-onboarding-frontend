import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const { isLogin } = useAuth();

  useEffect(() => {
    if (isLogin()) {
      todoService
        .get()
        .then((todos) => setTodos(todos))
        .catch(() => setError(true));
    }
  }, [isLogin, todoService, setTodos]);

  const createTodo = useCallback(
    (newTodo) => {
      todoService
        .create(newTodo)
        .then((data) => setTodos((prevTodos) => [...prevTodos, data]))
        .catch(() => alert("새로운 Todo를 추가하는데 실패했습니다."));
    },
    [todoService]
  );

  const updateTodo = useCallback(
    (todoId, newTodo, isCompleted) => {
      todoService
        .update(todoId, newTodo, isCompleted)
        .then((data) => {
          setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === data.id
                ? { ...todo, todo: data.todo, isCompleted: data.isCompleted }
                : todo
            )
          );
        })
        .catch(() => alert("Todo를 변경하는데 실패했습니다."));
    },
    [todoService]
  );

  const deleteTodo = useCallback(
    (todoId) => {
      todoService
        .delete(todoId)
        .then(
          setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== todoId)
          )
        )
        .catch(() => alert("Todo를 삭제하는데 실패했습니다."));
    },
    [todoService]
  );

  return (
    <TodoContext.Provider
      value={{ todos, isErrorTodos: error, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
