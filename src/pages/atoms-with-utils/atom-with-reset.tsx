import { useAtom } from "jotai"
import { counterAtomWithReset } from "./atoms"
import { useResetAtom } from "jotai/utils"

export const CounterWithReset = () => {
  const [count, setCount] = useAtom(counterAtomWithReset)
  const reset = useResetAtom(counterAtomWithReset)

  const increment = () => setCount((c) => c + 1)

  return (
    <div>
      <h3>Atom with reset</h3>
      <div>Count: {count}</div>
      <div style={{ display: 'flex', gap: 20, marginTop: 14}}>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset counter</button>
      </div>
    </div>
  )
}