import { atomWithImmer } from "jotai-immer";


const todo = {
  todo: {
    person: {
      name: "David",
        title: {
          goal: "old todo"
        },
    }
  }
};

const immerAtom = atomWithImmer(todo)

export { immerAtom }