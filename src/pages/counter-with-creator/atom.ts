import { atom } from "jotai"

const createCountIncAtoms = (initialValue: number) => {
  const countAtom = atom(initialValue)
  const countIncAtom = atom(null, (get, set) => {
    set(countAtom, get(countAtom) + 1)
  })
  return [countAtom, countIncAtom] 
}

const [fooAtom, fooIncAtom] = createCountIncAtoms(0)
const [barAtom, barIncAtom] = createCountIncAtoms(100)

export {
  fooAtom,
  fooIncAtom,
  barAtom,
  barIncAtom,
}


