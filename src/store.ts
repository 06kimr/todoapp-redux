import { makeAutoObservable } from "mobx";
import TodoItem from "./models/todoItem";
import { getTodos } from "./services/todoApi";

class Store {
  todos: TodoItem[];

  constructor() {
    makeAutoObservable(this);
    this.todos = [];
  }

  addTodo = (newTodo: string) => {
    this.todos.push(new TodoItem({ text: newTodo }));
  };

  toggleTodo = (id: number) => {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.toggle();
    }
  };

  fetchTodos = async () => {
    const todos = await getTodos();
    this.todos = todos.map((todo) => new TodoItem(todo));
  };
}
export default new Store();
