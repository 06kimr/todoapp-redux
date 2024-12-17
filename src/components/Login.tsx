import { FormEvent } from "react";
import { login } from "../services/userApi";
import { useSetAtom } from "jotai";
import { userAtom } from "../store";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

try{
  const user = await login(username, password);
  setUser(user);
  navigate('/')
}catch{
  alert("Invalud username or password")
}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="password">username</label>
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