import { useAtom } from "jotai"
import { asyncAtom, loadableAtom } from "./atom"
import { Suspense } from "react"

const CounterAsync = () => {
  const [asyncCounter] = useAtom(asyncAtom)

  return (
    <div>
      <div>Este contador possuí átomo assíncrono: {asyncCounter as string}</div>
    </div>
  )
}

const CounterLoadable = () => {
  // type LoadableAtom = {
  //   state: 'loading' | 'hasValue' | 'hasError',
  //   data?: unknown,
  //   error?: unknown
  // }
  const [loadableCounter] = useAtom(loadableAtom)

  if (loadableCounter.state === 'loading') {
    return <div>Loading...</div>
  }

  if (loadableCounter.state === 'hasError') {
    return <div>Error: {loadableCounter.error as string}</div>
  }

  return (
    <div>
      <div>Este contador possuí átomo carregável (loadable): {loadableCounter.data as string}</div>
    </div>
  )
}

const CounterWithSuspense = () => {
  return (
    <div>
      <h3>Async Counter</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <CounterAsync />
      </Suspense>
    </div>
  )
}

const CounterWithLoadable = () => {
  return (
    <div>
      <h3>Async Counter Loadable</h3>
      <CounterLoadable />
    </div>
  )
}

export const CounterAsyncPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 600, margin: '30px auto', gap: 10}}>
      <CounterWithSuspense />
      <CounterWithLoadable />
    </div>
  )
}