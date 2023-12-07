import { useState } from 'react';
import Selection from './components/Selection';

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

  const handleSubmit = (event) => {
    event.preventDefault()
    // validation
    if (5 * numOfCourts < numOfPlayers) {
      setErrorMessage('This configuration leaves too many people sitting. Only 1 bye per court is allowed.')
    }

    console.log(`you submited ${numOfPlayers} players, ${numOfCourts} of courts, and ${numOfGames} games`)
  }

  return (
    <div className="App">
      <Selection
        handleSubmit={handleSubmit}
        handlePlayerSelect={handlePlayerSelect}
        handleGamesSelect={handleGamesSelect}
        handleCourtSelect={handleCourtSelect}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;
