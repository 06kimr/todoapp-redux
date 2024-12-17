
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useRedux";
import { Todo } from "../types";
import Checkbox from "./Checkbox";
import { toggleTodo } from "../slices/todoSlice";

interface TodoListProps {
  filter?: "all"| "active" | "completed"
}

export default function TodoList({filter}: TodoListProps) {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch();

  const filteredTodos = filterTodos(todos, filter)
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => dispatch(toggleTodo({id: todo.id}))}
          />
        </li>
      ))}
    </ul>
  );
}

function filterTodos(todos: Todo[], filter?: "all"| "active" | "completed") {
  if (filter === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.done);
  }
  return todos;
}
