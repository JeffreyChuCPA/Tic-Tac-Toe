import { useState } from 'react'
import Board from './components/Board'
import './App.css'

// type Player = {
//   playerType: string
//   playerNumber: number,
//   score: number
// }

function App() {
  const [winner, setWinner] = useState<string>('')
  const [currentPlayer, setCurrentPlayer] = useState<string>('')

  const determineFirstTurn = (numberOfPlayers: number): void => {
    const randomTurn = Math.floor(Math.random() * numberOfPlayers)
    const firstTurn = randomTurn ? 'p1' : 'p2'
    return setCurrentPlayer(firstTurn)
  }

  return (
    <>
      {!currentPlayer ? determineFirstTurn(2) : null}
      {console.log(currentPlayer)}
      {/* <ResultsCard/> */}
      {/* <PlayerCard/> */}
      <Board setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
      {/* <PlayerCard/> */}
      {winner && console.log(`The Winner is ${winner}`)}
    </>
  )
}

export default App
