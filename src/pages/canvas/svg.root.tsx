import { useAtom } from "jotai"
import { 
  handleMouseDownAtom, 
  handleMouseMoveAtom, 
  handleMouseUpAtom 
} from "./atoms"
import { SvgDots } from "./svg.dots"

export const SvgRoot = () => {
  const [, handleMouseUp] = useAtom(handleMouseUpAtom)
  const [, handleMouseDown] = useAtom(handleMouseDownAtom)
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom)

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(event) => {
        handleMouseMove([event.clientX, event.clientY])
      }}>
        <rect width="100%" height="100%" fill="#242424" />
        <SvgDots />
      </svg>
  )
}