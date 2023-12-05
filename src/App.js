import { useState } from 'react';
import Selection from './components/Selection';

function App() {
  const [numOfPlayers, setNumOfPlayers] = useState()
  const [numOfGames, setNumOfGames] = useState()

  const handlePlayerSelect = (event) => {
    setNumOfPlayers(event.target.value)
  }

  const handleGamesSelect = (event) => {
    setNumOfGames(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`you submited ${numOfPlayers} players and ${numOfGames} games`)
  }

  return (
    <div className="App">
      <Selection
        handleSubmit={handleSubmit}
        handlePlayerSelect={handlePlayerSelect}
        handleGamesSelect={handleGamesSelect}
      />
    </div>
  );
}

export default App;
