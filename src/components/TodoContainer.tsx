import { useEffect } from "react";
import { useStore } from "../context/StoreContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { observer } from "mobx-react-lite";

const TodoContainer = observer( function TodoContainer() {
  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
fetchTodos();
  }, [fetchTodos])

  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList onToggleTodo={toggleTodo} todos={todos} />
    </div>
  );
})

export default TodoContainer
