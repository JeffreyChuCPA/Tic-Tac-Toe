import { useEffect, useState } from 'react'
import Board from './components/Board'
import './App.css'
import ResultsCard from './components/ResultsCard'
import PlayerCard from './components/PlayerCard'
import { checkWinner } from './utilities/checkWinner'
import { Player } from './utilities/types'
import SelectPlayers from './components/SelectPlayers'
import GameDataCard from './components/GameDataCard'


function App() {
  const [winner, setWinner] = useState<Player | null>(null)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  const [gameBoard, setGameBoard] = useState<(Player | null)[]>(Array(9).fill(null))
  const [allMarked, setAllMarked] = useState<boolean>(false)
  const [players, setPlayers] = useState<Player[]>([{playerType: "P1"}, {playerType: null}])

  useEffect(() => {
    {console.log('UseEffect has been triggered')}
    const hasWinner = checkWinner(gameBoard, players, setCurrentPlayer)
    if (!hasWinner) {
      if (gameBoard.every((cell) => cell !== null)) {
        setAllMarked(true)
        setCurrentPlayer(null)
      } else {
        setAllMarked(false)
      }
    } else {
      setWinner(hasWinner)
    }
    // console.log('useEffect triggered due to gameBoard change');
    // console.log('App useEffect rendered')
  }, [gameBoard])

  // useEffect(() => {
  //   console.log('Current Player:', currentPlayer);
  //   console.log('Winner:', winner);
  // }, [currentPlayer, winner]);

  return (
    <>
      {console.log(currentPlayer)}
      {console.log(winner)}
      {players[1].playerType === null 
        ? <SelectPlayers players={players} setPlayers={setPlayers} setCurrentPlayer={setCurrentPlayer}/> 
        : <div className='app'>
            <PlayerCard id={'0'} winner={winner} selectedPlayer={players[0]} currentPlayer={currentPlayer}/>
            <Board setWinner={setWinner} players={players} gameBoard={gameBoard} setGameBoard={setGameBoard} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
            <PlayerCard id={'1'} winner={winner} selectedPlayer={players[1]} currentPlayer={currentPlayer}/>
            <ResultsCard players={players} setCurrentPlayer={setCurrentPlayer} winner={winner} setWinner={setWinner} allMarked={allMarked} setAllMarked={setAllMarked} setGameBoard={setGameBoard} />
            <GameDataCard winner={winner} allMarked={allMarked} />
          </div>}
    </>
  )
}

export default App
