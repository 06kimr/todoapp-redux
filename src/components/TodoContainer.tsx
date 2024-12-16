import { useEffect } from "react";
import useStore from "../useStore";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList onToggleTodo={toggleTodo} todos={todos} />
    </div>
  );
}
