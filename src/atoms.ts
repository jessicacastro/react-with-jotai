import { atom } from "jotai"

const countAtom = atom(0)
const countryAtom = atom("Japão")
const citiesAtom = atom(["Tóquio", "Osaka", "Kyoto"])
const animeAtom = atom([
  { name: "Naruto", episodes: 220, watched: true },
  { name: "One Piece", episodes: 1000, watched: true },
  { name: "Bleach", episodes: 366, watched: false },
])

// ATOMOS DERIVADOS
const watchedAnimesAtom = atom((get) => {
  const animes = get(animeAtom)
  return animes.filter((anime) => anime.watched)
})

const progressAtom = atom((get) => {
  const animes = get(animeAtom)
  const watchedAnimes = get(watchedAnimesAtom)
  console.log(watchedAnimes.length, animes.length)
  
  return watchedAnimes.length / animes.length
})

const friendsAtom = atom([
  { name: "joão", online: true },
  { name: "maria", online: false },
  { name: "pedro", online: true },
  { name: "ana", online: true },
])

const onlineFriendsAtom = atom((get) => {
  const friends = get(friendsAtom)
  return friends.filter((friend) => friend.online)
})

const offlineFriendsAtom = atom((get) => {
  const friends = get(friendsAtom)
  return friends.filter((friend) => !friend.online)
})

export {
  countAtom,
  countryAtom,
  citiesAtom,
  animeAtom,
  watchedAnimesAtom,
  progressAtom,
  friendsAtom,
  onlineFriendsAtom,
  offlineFriendsAtom,
}


