import { CounterWithReset } from "./atom-with-reset"
import { SelectAtom } from "./select-atom"


export const AtomWithUtilsPage = () => {
 

  return(
    <section style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <div>
        <h2>Atoms with utils</h2>
        <p>Atoms with utils are atoms that have some utility functions attached to them. These utility functions can be used to manipulate the atom state.</p>
        <p>For example, the useResetAtom hook can be used to reset the atom state to its initial value. The useAtom hook can be used to read and update the atom state.</p>
      </div>

      <div>
        <CounterWithReset />
      </div>

      <div>
        <SelectAtom />
      </div>

    </section>


  )
}