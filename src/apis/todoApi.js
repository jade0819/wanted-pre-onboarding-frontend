import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
});

export async function createTodo(accessToken, todo) {
  return apiClient
    .post(
      "/todos",
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
}

export async function getTodos(accessToken) {
  return apiClient
    .get("/todos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);
}

export async function updateTodo(accessToken, todoId, todo, isCompleted) {
  return apiClient
    .put(
      `/todos/${todoId}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
}

export async function deleteTodo(accessToken, todoId) {
  return apiClient
    .delete(`/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);
}
