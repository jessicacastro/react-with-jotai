import { atom, useAtom } from "jotai"
import { asyncAtom, counter, todoAtom } from "./atom"
import { Suspense } from "react"

const CounterWriteAsyncComponent = () => {
  const [count] = useAtom(counter)
  const [, incCounter] = useAtom(asyncAtom)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <span>Contador: {count}</span>

      <button onClick={() => incCounter()}>Increment</button>
    </div>
  )
}

const CounterWriteAsyncWithSuspense = () => {
  const getRandomNumberBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

  const todoId = getRandomNumberBetween(1, 200)
  const request = async () => (await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)).json()
  const [todo, setTodo] = useAtom(todoAtom)

  const handleNewGoal = async () => {
    const result = await request();
    setTodo(result);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      { /* TRANSLATE TODO TO ENGLISH */}
      <span>Todo: {todo.title}</span>
      <button onClick={handleNewGoal}>New Goal</button>
    </div>
  )
}

export const CounterWriteAsyncPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <h1>Async Write Counter</h1>
      <CounterWriteAsyncComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <CounterWriteAsyncWithSuspense />
      </Suspense>
    </div>
  )
}