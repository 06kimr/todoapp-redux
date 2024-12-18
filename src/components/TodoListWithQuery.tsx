import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getTodos } from "../services/todoApi";
import { Todo } from "../types";
import Checkbox from "./Checkbox";

export default function TodoListWithQuery() {
  const location = useLocation();
  const filter = location.state?.filter ?? "all";

  const { isLoading, data: todos = [] } = useQuery({
    queryKey: ["todos", filter],
    queryFn: async () => {
      const todos = await getTodos();
      return filterTodos(todos, filter);
    },
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5, //캐싱된 데이터가 버려지는 시간
  });

  const queryClient = useQueryClient();

  const handleToggleTodo = (id: number) => {
    queryClient.setQueryData(["todos", filter], (todos: Todo[]) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // const filteredTodos = useSelector((state) => {
  //   const filteredTodos = filterTodos(state.todo.todos, filter);
  //   return filteredTodos;
  // });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.done}
            label={todo.text}
            onChange={() => handleToggleTodo(todo.id)}
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
