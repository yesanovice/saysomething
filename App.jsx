import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import Wishes from './Wishes.jsx'

export default function App() {
  const location = useLocation()

  return (
    <div className="app">
      <nav>
        <Link to="/" className="brand">say it.</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link>
          <Link to="/all" className={location.pathname === '/all' ? 'active' : ''}>all</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Wishes />} />
      </Routes>
    </div>
  )
}
