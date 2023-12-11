import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import 'tachyons'


const Results = () => {
  const data = [
    { player1: 1, player2: 5, player3: 3, player4: 4, bye: 2 },
    { player1: 3, player2: 5, player3: 2, player4: 4, bye: 1 },
  ]

  const randomizer = () => {
    console.log('data output on this page')
  }
  useEffect(() => {
    randomizer()
  }, [])


  return (
    <div className='mt5 tc'>
      <h1>Randomized Results</h1>
      <table className='mb3 center'>
        <thead>
          <tr>
            <th className='ba bg-light-gray' colspan={4}>Matchups</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='ba'>Team 1</th>
            <th className='ba bg-gray'></th>
            <th className='ba'>Team 2</th>
            <th className='ba'>Bye</th>
          </tr>
          {data.map((player) => (
            <tr>
              <td className='ba'>{player.player1}, {player.player2}</td>
              <td className='ba'>vs</td>
              <td className='ba'>{player.player1}, {player.player2}</td>
              <td className='ba'>{player.bye}</td>
            </tr>
          ))}
        </tbody>

      </table>
      <Link to='/' className='ba pa1 black no-underline bg-light-gray hover-bg-black-20'>Back</Link>
    </div>
  );
};

export default Results;