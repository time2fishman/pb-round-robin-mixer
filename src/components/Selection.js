import 'tachyons'

const Selection = ({ handlePlayerSelect, handleGamesSelect, handleSubmit }) => {
  return (
    <>
      <h1 className='tc'>Pickleball Round Robin Mixer</h1>
      <form className='tc' onSubmit={handleSubmit}>
        <label className='f4' htmlFor='numberOfPlayers'>
          Select number of players:
          <select onChange={handlePlayerSelect} className='ml2 pt1 pr2 pb1 pl2' name='numberOfPlayers' id='numberOfPlayers' required>
            <option></option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
        </label>
        <br></br>
        <label className='f4' htmlFor='numberOfGames'>
          Select number of Games:
          <select onChange={handleGamesSelect} className='ml2 mt2 pt1 pr2 pb1 pl2' name='numberOfGames' id='numberOfGames' required>
            <option></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
          <br></br>
          <input className='mt2' type='submit' value='Randomize' />
        </label>
      </form>
    </>
  );
};

export default Selection;