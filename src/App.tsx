import { useEffect, useState } from 'react'
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
  const [allMarked, setAllMarked] = useState<boolean>(false)

  useEffect(() => {
    gameBoard.every((cell) => cell !== null) ? setAllMarked(true) : setAllMarked(false)
  })

  const determineFirstTurn = (numberOfPlayers: number): void => {
    const randomTurn: number = Math.floor(Math.random() * numberOfPlayers)
    const firstTurn: string = randomTurn ? 'p1' : 'p2'
    return setCurrentPlayer(firstTurn)
  }

  return (
    <>
      {!currentPlayer ? determineFirstTurn(2) : null}
      {console.log(currentPlayer)}
      {console.log(gameBoard)}
      <div className='app'>
        {/* <PlayerCard/> */}
        <Board gameBoard={gameBoard} setGameBoard={setGameBoard} winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
        {/* <PlayerCard/> */}
        <ResultsCard winner={winner} setWinner={setWinner} allMarked={allMarked} setGameBoard={setGameBoard} />
      </div>
    </>
  )
}

export default App
