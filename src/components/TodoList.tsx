import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../hooks/useRedux";
import { toggleTodo } from "../slices/todoSlice";
import { Todo } from "../types";
import Checkbox from "./Checkbox";

export default function TodoList() {
  const location = useLocation();
  const filter = location.state?.filter ?? "all";
  const filteredTodos = useSelector((state) => {
    const filteredTodos = filterTodos(state.todo.todos, filter);
    return filteredTodos;
  });
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => dispatch(toggleTodo({ id: todo.id }))}
          />
        </li>
      ))}
    </ul>
  );
}

function filterTodos(todos: Todo[], filter: "all" | "active" | "completed") {
  if (todos.length === 0) {
    return todos;
  }
  if (filter === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.done);
  }
  return todos;
}
