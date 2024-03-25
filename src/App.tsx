import './App.css'
import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


const themeAtom = atomWithStorage('dark', false)

function App() {
  const [theme, setTheme] = useAtom(themeAtom)
  
  const handleToggleTheme = () => setTheme(!theme)

  const themeClass = theme ? 'dark' : 'light'

  return (
    <main className={themeClass}>
      <header>
        <div className="logo">JotaiAPP</div>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </header>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
