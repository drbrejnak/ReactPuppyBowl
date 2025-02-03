import './App.css'
import AllPlayers from '../components/AllPlayers'
import SinglePlayer from '../components/SinglePlayer'
import NewPlayerForm from '../components/NewPlayerForm'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return(
    <>
      <header>
        <h1>Puppy Bowl Roster 2025!</h1>
        <Link className='navbar' to='/'>Home</Link>
      </header>
      <div className="wrapper">
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/player/:id' element={<SinglePlayer />} />
      </Routes>
      {location.pathname === '/' && (
        <NewPlayerForm />
      )}
      </div>
    </>
    )
}

export default App
