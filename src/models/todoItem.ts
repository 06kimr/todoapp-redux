import { makeAutoObservable } from "mobx";
import { Todo } from "../types";

export default class TodoItem implements Todo {
  id: number;
  done: boolean;
  text: string;

  constructor({
    id = Date.now(),
    text = "",
    done = false,
  }: Partial<Todo> = {}) {
    makeAutoObservable(this)
    this.id = id;
    this.text = text;
    this.done = done;
  }

  toggle = () => {
    this.done = !this.done;
  };
}
