import { useAtom } from "jotai"
import { immerAtom } from "./atoms"

export const ImmerIntegrationPage = () => {
  const [todoAtom, setAtomTodo] = useAtom(immerAtom)

  const updateTodo = () => setAtomTodo((state) => {
    state.todo.person.title.goal = "new todo"
    return state
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <h3>Immer integration</h3>
      <p><strong>Name: </strong> { todoAtom.todo.person.name }</p>
      <p><strong>Goal: </strong> { todoAtom.todo.person.title.goal }</p>
      <button onClick={updateTodo}>Update todo</button>
    </div>
  )
}