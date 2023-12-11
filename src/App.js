import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Selection from './components/Selection';
import Results from './components/Results';

function App() {
  const [numOfPlayers, setNumOfPlayers] = useState()
  const [numOfGames, setNumOfGames] = useState()
  const [numOfCourts, setNumOfCourts] = useState()
  const [errorMessage, setErrorMessage] = useState('')

  const handlePlayerSelect = (event) => {
    setNumOfPlayers(event.target.value)
    setErrorMessage('')
  }

  const handleCourtSelect = (event) => {
    setNumOfCourts(event.target.value)
    setErrorMessage('')
  }

  const handleGamesSelect = (event) => {
    setNumOfGames(event.target.value)
    setErrorMessage('')
  }

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    // validation
    if ((numOfCourts * 5) < numOfPlayers) {
      setErrorMessage('This configuration leaves too many people sitting. Only 1 bye per court is allowed.')
    } else if ((numOfCourts * 4) > numOfPlayers) {
      setErrorMessage('There are not enough players to fill the selected amount of courts.')
    } else {
      navigate('/results')
    }

    console.log(`you submited ${numOfPlayers} players, ${numOfCourts} courts, and ${numOfGames} games`)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Selection
          handleSubmit={handleSubmit}
          handlePlayerSelect={handlePlayerSelect}
          handleGamesSelect={handleGamesSelect}
          handleCourtSelect={handleCourtSelect}
          errorMessage={errorMessage}
        />} />
        <Route path="results" element={<Results handleSubmit={handleSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;
