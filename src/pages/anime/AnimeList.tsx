import { useAtomValue } from "jotai"
import { animeAtom } from "../../atoms"

export const AnimeList = () => {
  const anime = useAtomValue(animeAtom)

  return (
    <>
      <h1 style={{ 
        textTransform: 'uppercase', 
        fontWeight: 'lighter', 
        fontSize: '2.5rem', 
        marginBottom: '20px'
      }}>Meus Animes</h1>
      <ul>
        {anime.map((anime) => (
          <li key={anime.name}>
            <strong>{anime.name}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}