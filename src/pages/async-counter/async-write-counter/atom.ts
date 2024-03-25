import { atom } from "jotai";

const counter = atom(1)
const asyncAtom = atom(null, async (get, set) => {
  await fetch('https://jsonplaceholder.typicode.com/todos/')
  set(counter, get(counter) + 1)
})

const todo = {
  id: 0,
  title: 'learn jotai',
  completed: true
}
const todoAtom = atom(todo)

export { counter, asyncAtom, todoAtom }