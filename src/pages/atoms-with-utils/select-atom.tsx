import { useAtom } from "jotai"
import { birthSelectAtom, nameSelectAtom, personAtom } from "./atoms"
import { useRef, useEffect } from "react"


const useCommitCount = () => {
  const rerenderCounterRef = useRef(0)

  useEffect(() => {
    rerenderCounterRef.current++
  })

  return rerenderCounterRef.current
}

// Rerender quando o nameSelectAtom mudar.
const DisplayName = () => {
  const [name] = useAtom(nameSelectAtom)
  const rerenderCounter = useCommitCount()

  return (
    <div>
      Name: {name.first} {name.last}
      <div>Rerender count: {rerenderCounter}</div>
      <hr />
    </div>
  )
}

const DisplayBirthday = () => {
  const [birth] = useAtom(birthSelectAtom)
  const rerenderCounter = useCommitCount()

  return (
    <div>
      Birthday: {birth.day}/{birth.month}/{birth.year}
      <div>Rerender count: {rerenderCounter}</div>
      <hr />
    </div>
  )	
}

// Troca o first e o last name, triggerando uma mudança no nameSelectAtom.
const SwapNames = () => {
  const [, setPerson] = useAtom(personAtom)

  const handleChangeNames = () => {
    setPerson((person) => ({
      ...person,
      name: {
        first: person.name.last,
        last: person.name.first
      }
    }))
  }

  return (
    <div>
      <button onClick={handleChangeNames}>Trocar nomes (last=first, first=last)</button>
    </div>
  )
}

const CopyPerson = () => {
  const [, setPerson] = useAtom(personAtom)

  const handleCopyPerson = () => {
    setPerson((person) => ({ ...person }))
  }

  return (
    <div>
      <button onClick={handleCopyPerson}>Copiar pessoa com um deep copy</button>
    </div>
  )
}

const IncrementBirthYear = () => {
  const [, setPerson] = useAtom(personAtom)

  const handleIncrementYear = () => {
    setPerson((person) => ({
      ...person,
      birth: {
        ...person.birth,
        year: person.birth.year + 1
      }
    }))
  }

  return (
    <div>
      <button onClick={handleIncrementYear}>Incrementar ano de nascimento</button>
    </div>
  )
}


export const SelectAtom = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <DisplayName />
      <DisplayBirthday />
      <SwapNames />
      <CopyPerson />
      <IncrementBirthYear />
    </div>
  )
}