import { useEffect, useState } from 'react'
import Board from './components/Board'
import './App.css'
import ResultsCard from './components/ResultsCard'
import PlayerCard from './components/PlayerCard'
import { checkWinner } from './utilities/checkWinner'
import { Player } from './utilities/types'
import SelectPlayers from './components/SelectPlayers'


function App() {
  const [winner, setWinner] = useState<Player | null>(null)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  const [gameBoard, setGameBoard] = useState<(Player | null)[]>(Array(9).fill(null))
  const [allMarked, setAllMarked] = useState<boolean>(false)
  const [players, setPlayers] = useState<Player[]>([{playerType: "P1", score: 0}, {playerType: null, score: 0}])

  useEffect(() => {
    gameBoard.every((cell) => cell !== null) ? setAllMarked(true) : setAllMarked(false)
    setWinner(checkWinner(gameBoard, players))
  }, [gameBoard])

  return (
    <>
      {console.log(currentPlayer)}
      {console.log(players)}
      {console.log(gameBoard)}
      {players[1].playerType === null ? <SelectPlayers players={players} setPlayers={setPlayers} setCurrentPlayer={setCurrentPlayer}/> : null}
      {players[1].playerType !== null ?  
        <div className='app'>
          <PlayerCard winner={winner}/>
          <Board players={players} gameBoard={gameBoard} setGameBoard={setGameBoard} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
          <PlayerCard winner={winner}/>
          <ResultsCard winner={winner} setWinner={setWinner} allMarked={allMarked} setGameBoard={setGameBoard} />
        </div> : null}
    </>
  )
}

export default App
