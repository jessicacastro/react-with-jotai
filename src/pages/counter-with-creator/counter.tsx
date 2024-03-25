import { useAtom } from "jotai"
import { fooAtom, barAtom, fooIncAtom, barIncAtom } from "./atom"

export const CounterWithCreatorAtom = () => {
  const [fooCount] = useAtom(fooAtom)
  const [barCount] = useAtom(barAtom)
  const [, incrementFoo] = useAtom(fooIncAtom)
  const [, incrementBar] = useAtom(barIncAtom)

  const handleIncrementFoo = () => incrementFoo(1)
  const handleIncrementBar = () => incrementBar(1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <div>foo: {fooCount}</div>
      <div>bar: {barCount}</div>
      <button onClick={handleIncrementFoo}>Increment Foo</button>
      <button onClick={handleIncrementBar}>Increment Bar</button>
    </div>
  )
}