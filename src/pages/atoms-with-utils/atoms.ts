import { atom } from "jotai";
import { atomWithReset, selectAtom } from "jotai/utils";
import { isEqual } from "lodash-es";

const initialValue = 0;

const counterAtomWithReset = atomWithReset(initialValue);

/** SELECT ATOM */
const defaultPerson = {
  name: {
    first: "Jane",
    last: "Doe"
  },
  birth: {
    year: 2000,
    month: "Jan",
    day: 1,
    time: {
      hour: 0,
      minute: 0
    }
  }
};

// Original atom.
const personAtom = atom(defaultPerson);

// Mapeia a person.name. É atualizado sempre que o campo name muda, mesmo se o first ou last não mudar.
const nameSelectAtom = selectAtom(personAtom, (person) => person.name);

// Mapeia o aniversário de uma pessoa. Atualiza quando o ano, mês, dia, hora ou minuto mudam.
// Usa o deepEquals significa que esse atom não atualiza se o campo birthday for alterado para um novo objeto com os mesmos valores. 
// exemplo: se a pessoa for re-renderizada do data fetching.

const birthSelectAtom = selectAtom(personAtom, (person) => person.birth, isEqual);

export {
  counterAtomWithReset,
  nameSelectAtom,
  birthSelectAtom,
  personAtom
}
