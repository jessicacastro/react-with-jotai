import { atom } from "jotai";
import { loadable } from "jotai/utils";

const counter = atom(1)
const asyncAtom = atom(async (get) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(100)
    }, 3000)

    return get(counter) * 5;
  })
});
const loadableAtom = loadable(asyncAtom)

export { counter, asyncAtom, loadableAtom }
