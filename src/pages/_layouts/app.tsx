import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}