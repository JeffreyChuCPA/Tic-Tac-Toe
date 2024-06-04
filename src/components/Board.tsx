import React from 'react'
import MarkBox from './MarkBox'
import { Player } from '../utilities/types';

type BoardProps = {
  gameBoard: (Player | null)[],
  setGameBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>,
  winner: Player | null,
  currentPlayer: Player | null,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>,
  players: Player[]
}

const Board: React.FC<BoardProps> = ({gameBoard, setGameBoard, winner, currentPlayer, setCurrentPlayer, players}) => {

  return (
    <div className='board'>
      <div className='row' id='row1'>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={0}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={1}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={2}/>
      </div>
      <div className='row' id='row2'>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={3}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={4}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={5}/>
      </div>
      <div className='row' id='row3'>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={6}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={7}/>
        <MarkBox players={players} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={8}/>
      </div>
    </div>
  )
}

export default Board