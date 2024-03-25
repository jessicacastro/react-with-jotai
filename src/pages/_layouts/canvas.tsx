import { Outlet } from "react-router-dom";

export const CanvasLayout = () => {
  return (
    <div className="canvas" style={{ height: 'calc(100vh - 57px)'}}>
      <Outlet />
    </div>
  )
}