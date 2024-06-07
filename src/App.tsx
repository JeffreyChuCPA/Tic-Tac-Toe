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
    if (gameBoard.every((cell) => cell !== null)) {
      setAllMarked(true)
      setCurrentPlayer(null)
    } else {
      setAllMarked(false)
    }
    setWinner(checkWinner(gameBoard, players, setCurrentPlayer))
  }, [gameBoard])

  return (
    <>
      {console.log(currentPlayer)}
      {console.log(players)}
      {console.log(gameBoard)}
      {players[1].playerType === null ? <SelectPlayers players={players} setPlayers={setPlayers} setCurrentPlayer={setCurrentPlayer}/> :
        <div className='app'>
          <PlayerCard id={'0'} winner={winner} selectedPlayer={players[0]} currentPlayer={currentPlayer}/>
          <Board players={players} gameBoard={gameBoard} setGameBoard={setGameBoard} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
          <PlayerCard id={'1'} winner={winner} selectedPlayer={players[1]} currentPlayer={currentPlayer}/>
          <ResultsCard players={players} setCurrentPlayer={setCurrentPlayer} winner={winner} setWinner={setWinner} allMarked={allMarked} setGameBoard={setGameBoard} />
          <GameDataCard winner={winner} allMarked={allMarked} />
        </div>}
    </>
  )
}

export default App
