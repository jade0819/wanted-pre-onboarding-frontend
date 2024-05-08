// TodoService interface
// get():Promise<Todos[]>
// create(newTodo):Promise<Todo>
// update(id, newTodo, isCompleted):Promise<Todo>
// delete(id):Promise<void>

export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch("/todos", {
      method: "get",
    });

    return response.data;
  }

  async create(newTodo) {
    const response = await this.httpClient.fetch("/todos", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        todo: newTodo,
      },
    });

    return response.data;
  }

  async update(todoId, newTodo, isCompleted) {
    const response = await this.httpClient.fetch(`/todos/${todoId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        todo: newTodo,
        isCompleted: isCompleted,
      },
    });

    return response.data;
  }

  async delete(todoId) {
    await this.httpClient.fetch(`/todos/${todoId}`, {
      method: "delete",
    });
  }
}
