import React, { useEffect, useState } from 'react'
import MarkBox from './MarkBox'

type BoardProps = {
  setWinner: React.Dispatch<React.SetStateAction<string>>,
  currentPlayer: string,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>
}

type WinningCombos = {
  row: number[][],
  column: number[][],
  cross: number[][],
}

const Board: React.FC<BoardProps> = ({setWinner, currentPlayer, setCurrentPlayer}) => {
  const [gameBoard, setGameBoard] = useState<(string | null)[]>(Array(9).fill(null))
  
  useEffect(() => {
    setWinner(checkWinner(gameBoard))
  }, gameBoard)
  
  const winningCombos: WinningCombos = {
    row: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    column: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
    cross: [[0, 4, 8], [2, 4, 6]]
  }

  const checkWinner = (gameBoard: (string | null)[]): string => {
    for (const section in winningCombos) {
      const winningConditions = winningCombos[section as keyof WinningCombos]
      for (const winningCondition of winningConditions) {
        if (winningCondition.every((value) => gameBoard[value] === 'p1')) {
          return 'p1'
        } else if (winningCondition.every((value) => gameBoard[value] === 'p2')) {
          return 'p2'
        } 
      }
    }
    return ''
  }
  console.log(gameBoard)


  return (
    <div className='board'>
      <div className='row' id='row1'>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={0}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={1}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={2}/>
      </div>
      <div className='row' id='row2'>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={3}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={4}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={5}/>
      </div>
      <div className='row' id='row3'>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={6}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={7}/>
        <MarkBox currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} id={8}/>
      </div>
    </div>
  )
}

export default Board