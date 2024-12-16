import { Todo } from "../types"

export function getTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, text: 'a', done: false},
        {id: 2, text: 'b', done: true},
        {id: 3, text: 'c', done: false},
      ])
    }, 1000)
  })
}