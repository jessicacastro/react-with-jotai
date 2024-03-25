import { useSetAtom } from "jotai"
import { animeAtom } from "../../atoms"

export const AnimeAdd = () => {
  const setAnime = useSetAtom(animeAtom)

  return (
    <button onClick={
      () => setAnime((animes) => [
        ...animes,
        { name: "Cowboy Bebop", episodes: 26, watched: false },
      ])
    }>
      Add cowboy bebop
    </button>
  )
}