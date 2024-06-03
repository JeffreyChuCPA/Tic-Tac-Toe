import { useState } from 'react'
import Board from './components/Board'
import './App.css'
import ResultsCard from './components/ResultsCard'

// type Player = {
//   playerType: string
//   playerNumber: number,
//   score: number
// }

function App() {
  const [winner, setWinner] = useState<string>('')
  const [currentPlayer, setCurrentPlayer] = useState<string>('')
  const [gameBoard, setGameBoard] = useState<(string | null)[]>(Array(9).fill(null))

  const determineFirstTurn = (numberOfPlayers: number): void => {
    const randomTurn = Math.floor(Math.random() * numberOfPlayers)
    const firstTurn = randomTurn ? 'p1' : 'p2'
    return setCurrentPlayer(firstTurn)
  }

  return (
    <>
      {!currentPlayer ? determineFirstTurn(2) : null}
      {console.log(currentPlayer)}
      {console.log(gameBoard)}
      {/* <PlayerCard/> */}
      <Board gameBoard={gameBoard} setGameBoard={setGameBoard} winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
      {/* <PlayerCard/> */}
      {winner && console.log(`The Winner is ${winner}`)}
      <ResultsCard winner={winner} setWinner={setWinner} setGameBoard={setGameBoard} />
    </>
  )
}

export default App
