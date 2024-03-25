import { useAtomValue } from "jotai"
import { onlineFriendsAtom, offlineFriendsAtom } from "../../atoms"

type Friend = {
  name: string
  online: boolean
}

export const Friends = () => {
  const onlineFriends: Friend[] = useAtomValue(onlineFriendsAtom)
  const offlineFriends: Friend[] = useAtomValue(offlineFriendsAtom)

  return (
    <section className="friends">
      <h1 style={{ 
        textTransform: 'uppercase', 
        fontWeight: 'lighter', 
        fontSize: '2.5rem', 
        marginBottom: '20px'
      }}>Meus Amigos</h1>
      <h2 style={{ color: 'greenyellow'}}>Online</h2>
      <ul>
        {onlineFriends.map((friend) => (
          <li key={friend.name}>
            <strong>{friend.name}</strong>
            span
          </li>
        ))}
      </ul>
      <h2 style={{ color: 'red'}}>Offline</h2>
      <ul>
        {offlineFriends.map((friend) => (
          <li key={friend.name}>
            <strong>{friend.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}