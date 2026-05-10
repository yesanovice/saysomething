import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './supabase.js'

export default function Home() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const remaining = 300 - text.length

  async function handleSubmit() {
    if (!text.trim()) return
    setLoading(true)
    setError('')
    const { error } = await supabase.from('wishes').insert([{ text: text.trim() }])
    if (error) {
      setError('something went wrong. try again.')
    } else {
      setText('')
      setDone(true)
      setTimeout(() => setDone(false), 3000)
    }
    setLoading(false)
  }

  return (
    <div className="page">
      <div className="hero">
        <h1>say anything.</h1>
        <p>no account. no name. just say it. 300 characters.</p>
      </div>

      <div className="form">
        <textarea
          value={text}
          onChange={e => { setText(e.target.value); setDone(false) }}
          maxLength={300}
          placeholder="type something..."
          rows={5}
        />
        <div className="form-row">
          <span className={`count ${remaining <= 20 ? 'warn' : ''}`}>{remaining}</span>
          <button onClick={handleSubmit} disabled={loading || !text.trim()}>
            {loading ? 'posting...' : 'post'}
          </button>
        </div>
        {done && <p className="success">posted.</p>}
        {error && <p className="error">{error}</p>}
      </div>

      <Link to="/all" className="see-all">see what others said →</Link>
    </div>
  )
}
