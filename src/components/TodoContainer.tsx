import { useState, useCallback } from "react";
import { Todo } from "../types";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((newTodo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text: newTodo, done: false },
    ]);
  }, []);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList onToggleTodo={toggleTodo} todos={todos} />
    </div>
  );
}
