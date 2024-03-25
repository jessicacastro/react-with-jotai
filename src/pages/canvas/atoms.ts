import { atom } from "jotai"

// Atom to handle the dots
const dotsAtom = atom([])

// Atom to handle the drawing state
const drawningAtom = atom(false)

const handleMouseUpAtom = atom(null, (_, set) => {
  set(drawningAtom, false);
});

// Atom to handle the mouse down event
const handleMouseDownAtom = atom(
  null,
  (_, set) => set(drawningAtom, true)
)

// Atom to handle the mouse up event
const handleMouseMoveAtom = atom(
  null,
  (get, set, update) => {
    if (get(drawningAtom)) {
      set(dotsAtom, (prev: never[]) => [...prev, update] as never[])
    }
  }
)

export {
  dotsAtom,
  drawningAtom,
  handleMouseDownAtom,
  handleMouseMoveAtom,
  handleMouseUpAtom
}