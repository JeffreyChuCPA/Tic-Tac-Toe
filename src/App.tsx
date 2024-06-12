import { useState } from 'react'
import Board from './components/Board'
import './App.css'
import ResultsCard from './components/ResultsCard'
import PlayerCard from './components/PlayerCard'
import { Player } from './utilities/types'
import SelectPlayers from './components/SelectPlayers'
import GameDataCard from './components/GameDataCard'
import { determineFirstTurn } from './utilities/determineFirstTurn'


function App() {
  const [winner, setWinner] = useState<Player | null>(null)
  const [players, setPlayers] = useState<Player[]>([{playerType: "P1"}, {playerType: null}])
  const [allMarked, setAllMarked] = useState<boolean>(false)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null))

  //move all game and event logic here
  const gameIsTie = (tie: boolean): void => {
    setAllMarked(tie)
    setCurrentPlayer(null)
  }

  const gameIsWon = (winningPlayer: Player | null): void => {
    setWinner(winningPlayer)
    setCurrentPlayer(null)
  }

  const switchPlayers = () => {
    if (currentPlayer === players[0]) {
      setCurrentPlayer(players[1]);
    } else {
      setCurrentPlayer(players[0]);
    }
  }

  const resetGame = () => {
    setWinner(null)
    setAllMarked(false)
    determineFirstTurn(2, players, setCurrentPlayer)
    const newBoard: (Player | null)[] = Array(9).fill(null)
    setBoard(newBoard)
  }

  

  return (
    <>
      {players[1].playerType === null 
        ? <SelectPlayers players={players} setPlayers={setPlayers} setCurrentPlayer={setCurrentPlayer}/> 
        : <div className='app'>
          <PlayerCard id={'0'} winner={winner} selectedPlayer={players[0]} currentPlayer={currentPlayer}/>
          <Board board={board} players={players} currentPlayer={currentPlayer} winner={winner} setBoard={setBoard} gameIsTie={gameIsTie} gameIsWon={gameIsWon} switchPlayers={switchPlayers}/>
          <PlayerCard id={'1'} winner={winner} selectedPlayer={players[1]} currentPlayer={currentPlayer}/>
          <ResultsCard  winner={winner} allMarked={allMarked} resetGame={resetGame} />
          <GameDataCard winner={winner} allMarked={allMarked} />
          </div>}
    </>
  )
}

export default App
