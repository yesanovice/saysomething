import { useEffect, useState } from 'react'
import { supabase } from './supabase.js'
import WishCard from './WishCard.jsx'

export default function Wishes() {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
      if (data) setWishes(data)
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <div className="page">
      <div className="hero">
        <h1>everyone.</h1>
        <p>everything people said, newest first.</p>
      </div>
      {loading && <p className="muted">loading...</p>}
      {!loading && wishes.length === 0 && <p className="muted">nothing yet. be the first.</p>}
      <div className="feed">
        {wishes.map(w => <WishCard key={w.id} wish={w} />)}
      </div>
    </div>
  )
}
