import './App.css'
import AllPlayers from '../components/AllPlayers'
import SinglePlayer from '../components/SinglePlayer'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return(
    <>
      <header>
        <h1>Puppy Bowl Roster 2025!</h1>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
      </header>
      <div className="wrapper">
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
        <form id="new-player-form"></form>
      </div>
    </>
    )
}

export default App
