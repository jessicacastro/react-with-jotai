import { useAtomValue } from "jotai"
import { progressAtom } from "../../atoms"

export const AnimeProgressTracker = () => {
  const progress = useAtomValue(progressAtom)

  return <div style={{ marginTop: "20px" }}>{Math.trunc(progress * 100)} % watched</div>
}