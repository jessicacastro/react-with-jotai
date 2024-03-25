import { AnimeList } from "./AnimeList"
import { AnimeAdd } from "./AnimeAdd"
import { AnimeProgressTracker } from "./AnimeProgressTracker"

export const Anime = () => {
  return (
    <section className="anime">
      <AnimeList />
      <AnimeAdd />
      <AnimeProgressTracker />
    </section>
  )
}