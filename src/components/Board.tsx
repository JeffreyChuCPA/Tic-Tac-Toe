import React from 'react'
import MarkBox from './MarkBox'

type BoardProps = {
  gameBoard: (string | null)[],
  setGameBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>,
  winner: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>,
  currentPlayer: string,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>
}

const Board: React.FC<BoardProps> = ({gameBoard, setGameBoard, winner, setWinner, currentPlayer, setCurrentPlayer}) => {

  return (
    <div className='board'>
      <div className='row' id='row1'>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={0}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={1}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={2}/>
      </div>
      <div className='row' id='row2'>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={3}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={4}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={5}/>
      </div>
      <div className='row' id='row3'>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={6}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={7}/>
        <MarkBox winner={winner} setWinner={setWinner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={8}/>
      </div>
    </div>
  )
}

export default Board