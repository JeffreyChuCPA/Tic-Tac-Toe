import React, { useEffect } from 'react'
import MarkBox from './MarkBox'
import { Player } from '../utilities/types';
import { switchPlayers } from '../utilities/switchPlayers';

type BoardProps = {
  players: Player[],
  currentPlayer: Player | null,
  board: (Player | null)[],
  winner: Player | null,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>,
  setWinner: React.Dispatch<React.SetStateAction<Player | null>>,
  setAllMarked: React.Dispatch<React.SetStateAction<boolean>>,
  setBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>,
}

type WinningCombos = {
  row: number[][],
  column: number[][],
  cross: number[][],
}

const winningCombos: WinningCombos = {
  row: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
  column: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
  cross: [[0, 4, 8], [2, 4, 6]]
}

const Board: React.FC<BoardProps> = ({players, currentPlayer, board, winner, setBoard, setCurrentPlayer, setWinner, setAllMarked}) => {
  

  useEffect(() => {
    //check if the board array has a winning player
    console.log('winner check');
    
    for (const section in winningCombos) {
      const winningConditions = winningCombos[section as keyof WinningCombos]
      for (const winningCondition of winningConditions) {
        if (winningCondition.every((value) => board[value] === players[0])) {
          console.log('player 1 win');
          setWinner(players[0]);
          setCurrentPlayer(null);
          break //*quick fix
        } else if (winningCondition.every((value) => board[value] === players[1])) {
          console.log('player 2 win');
          setWinner(players[1]);
          setCurrentPlayer(null);
        }
      }
    }

    //check if there is a full board/tie
    if (board.every(spot => spot !== null)) {
      setAllMarked(true)
      setCurrentPlayer(null);
      }
      
    //switch player
    // switchPlayers(players, currentPlayer, setCurrentPlayer)
    console.log(board);

  }, [currentPlayer, board, players, setAllMarked, setCurrentPlayer, setWinner])

  //if player is comp, determine the move for the comp and set the board
  let currentCompMark: number | null = null 
  if (currentPlayer?.playerType === 'Computer' && !winner) {
    
    const possibleCompMark: (number | null)[] = board.map((spot, index) => spot === null ? index : null).filter(spot => spot !== null)
    const randomPossibleMark: number = Math.floor(Math.random() * possibleCompMark?.length)
    currentCompMark = possibleCompMark[randomPossibleMark]
    console.log(currentCompMark)
  }

  

  return (
    <>
    {console.log('board rendered')}
    <div className='board'>
      <div className='row' id='row1'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={0}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={1}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={2}/>
      </div>
      <div className='row' id='row2'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={3}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={4}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={5}/>
      </div>
      <div className='row' id='row3'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={6}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={7}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setBoard={setBoard} id={8}/>
      </div>
    </div>
    </>
  )
}

export default Board