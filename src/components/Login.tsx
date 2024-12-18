import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";


import { useDispatch } from "../hooks/useRedux";
import { login } from "../slices/commonSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      dispatch(login({ username, password }));
      navigate("/");
    } catch {
      alert("Invalud username or password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" id="password" name="password" />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
