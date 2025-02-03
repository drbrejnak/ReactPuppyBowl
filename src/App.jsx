import './App.css'
import AllPlayers from '../components/AllPlayers'
import SinglePlayer from '../components/SinglePlayer'
import NewPlayerForm from '../components/NewPlayerForm'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useState } from 'react'

function App() {
  const location = useLocation()

  const [sharedData, setSharedData] = useState("")

  const handleDataChange = (newData) => {
    setSharedData(newData)
  }

  return(
    <>
      <header>
        <h1>Puppy Bowl Roster 2025!</h1>
          <div className='navbar-container'>
            <Link className='navbar' to='/'>Home</Link>
            {location.pathname === '/' && (
            <NavBar data={sharedData} onDataChange={handleDataChange} />
            )}
          </div>

      </header>
      <div className="wrapper">
      <Routes>
        <Route path='/' element={<AllPlayers data={sharedData} onDataChange={handleDataChange}  />} />
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