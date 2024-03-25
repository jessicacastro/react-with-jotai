import { useAtom } from "jotai"
import { dotsAtom } from "./atoms"

export const SvgDots = () => {
  const [dots] = useAtom(dotsAtom)

  return(
    <g>
      { dots.map(([x, y]: [number, number], index: number) => (
        <circle key={index} cx={x} cy={y} r="5" fill="white" />
      ))}
    </g>
  )
}