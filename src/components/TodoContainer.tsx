import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "../hooks/useRedux";
import { addTodo, fetchTodoRequest, toggleTodo } from "../slices/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const { todos } = useSelector((state) => ({ todos: state.todo.todos }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  const handleAddTodo = useCallback(
    (newTodo: string) => {
      dispatch(addTodo({ todo: newTodo }));
    },
    [dispatch]
  );

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo({ id }));
  };
  return (
    <div>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList onToggleTodo={handleToggleTodo} todos={todos} />
    </div>
  );
}
