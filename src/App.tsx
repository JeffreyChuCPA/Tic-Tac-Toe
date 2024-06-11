import { useState } from 'react'
import Board from './components/Board'
import './App.css'
import ResultsCard from './components/ResultsCard'
import PlayerCard from './components/PlayerCard'
import { Player } from './utilities/types'
import SelectPlayers from './components/SelectPlayers'
import GameDataCard from './components/GameDataCard'


function App() {
  const [winner, setWinner] = useState<Player | null>(null)
  const [players, setPlayers] = useState<Player[]>([{playerType: "P1"}, {playerType: null}])
  const [allMarked, setAllMarked] = useState<boolean>(false)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null))


  return (
    <>
    {console.log(currentPlayer)}
      {players[1].playerType === null 
        ? <SelectPlayers players={players} setPlayers={setPlayers} setCurrentPlayer={setCurrentPlayer}/> 
        : <div className='app'>
            <PlayerCard id={'0'} winner={winner} selectedPlayer={players[0]} currentPlayer={currentPlayer}/>
            <Board players={players} currentPlayer={currentPlayer} board={board} winner={winner} setBoard={setBoard} setCurrentPlayer={setCurrentPlayer} setWinner={setWinner} setAllMarked={setAllMarked}/>
            <PlayerCard id={'1'} winner={winner} selectedPlayer={players[1]} currentPlayer={currentPlayer}/>
            <ResultsCard players={players} setCurrentPlayer={setCurrentPlayer} winner={winner} setWinner={setWinner} allMarked={allMarked} setAllMarked={setAllMarked} setBoard={setBoard} />
            <GameDataCard winner={winner} allMarked={allMarked} />
          </div>}
    </>
  )
}

export default App
