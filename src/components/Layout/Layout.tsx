import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import { userAtom } from "../../store";
import { useAtomValue } from "jotai";

export default function Layout() {
  const user = useAtomValue(userAtom);
  return (
    <div className="layout__container">
      <div className="layout__gnb">
        <h1 className="layout__title">Todo App</h1>
        <div>
          <Link className="layout__link" to="/">
            Home
          </Link>
          <Link className="layout__link" to="/about">
            About
          </Link>
          {user ? (
            <Link className="layout__link" to="/protected">
              {user.username}
            </Link>
          ) : (
            <Link className="layout__link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
