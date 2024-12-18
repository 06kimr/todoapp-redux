import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "../../hooks/useRedux";
import { addTodo } from "../../slices/todoSlice";
import TodoInput from "../TodoInput";
import "./todoContainer.css";

export default function TodoContainerWithQuery() {
  const dispatch = useDispatch();


  return (
    <div>
      <TodoInput onAddTodo={(todo: string) => dispatch(addTodo({ todo }))} />
      <div>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: 'all'
          }}
        >
          all
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: 'active'
          }}
        >
          active
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `todo-container__link ${isActive && "todo-container__link--active"}`
          }
          to=""
          replace
          state={{
            filter: 'completed'
          }}
        >
          completed
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
