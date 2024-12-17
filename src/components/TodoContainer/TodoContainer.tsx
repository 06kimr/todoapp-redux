import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  addTodoAtom,
  fetchTodosAtom
} from "../../store";
import TodoInput from "../TodoInput";
import './todoContainer.css'

export default function TodoContainer() {
  const addTodo = useSetAtom(addTodoAtom);
  const fetchTodos = useSetAtom(fetchTodosAtom);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <div>
      <TodoInput onAddTodo={addTodo} />
      <div>
        <NavLink className={({isActive}) => `todo-container__link ${isActive && "todo-container__link--active"}`} to="/">all</NavLink>
        <NavLink className={({isActive}) => `todo-container__link ${isActive && "todo-container__link--active"}`} to="/active">active</NavLink>
        <NavLink className={({isActive}) => `todo-container__link ${isActive && "todo-container__link--active"}`} to="/completed">completed</NavLink>

      </div>
      <Outlet />
    
    </div>
  );
}
