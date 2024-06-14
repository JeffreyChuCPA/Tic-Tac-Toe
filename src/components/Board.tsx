import React, { useEffect, useState } from 'react'
import MarkBox from './MarkBox'
import { Player } from '../utilities/types';
import { checkWinner } from '../utilities/checkWinner';

type BoardProps = {
  players: Player[],
  currentPlayer: Player | null,
  winner: Player | null,
  board: (Player | null)[]
  gameIsTie: (tie: boolean) => void,
  gameIsWon: (winningPlayer: Player | null) => void,
  switchPlayers: () => void,
  setBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>,
}

const Board: React.FC<BoardProps> = ({players, currentPlayer, winner, board, gameIsTie, gameIsWon, switchPlayers, setBoard}) => {
  const [currentCompMark, setCurrentCompMark] = useState<number | null>(null);

  useEffect(() => {

    //* 1. Check board for winner
    if (checkWinner(board, players) && !winner) {
      gameIsWon(checkWinner(board, players))
    }

    //* 2. No winner => Check board if completely filled
    if (board.every(spot => spot !== null)) {
      gameIsTie(true)
    }

    //* 3. Board not filled => determine the move for the comp if current player is comp
    if (currentPlayer?.playerType === 'Computer' && !winner) {
      
      const generateCompMark = () => {
        const possibleCompMark: (number | null)[] = board.map((spot, index) => spot === null ? index : null).filter(spot => spot !== null)
        const randomPossibleMark: number = Math.floor(Math.random() * possibleCompMark?.length)
        setCurrentCompMark(possibleCompMark[randomPossibleMark])
      }
      const timeoutId = setTimeout(() => {
        generateCompMark()
      }, 2000)

      return () => clearTimeout(timeoutId);

    } else {
      setCurrentCompMark(null)
    }

  }, [board, currentPlayer?.playerType, gameIsTie, gameIsWon, players, winner])


  return (
    <>
    <div className='board'>
      <div className='row' id='row1'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={0}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={1}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={2}/>
      </div>
      <div className='row' id='row2'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={3}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={4}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={5}/>
      </div>
      <div className='row' id='row3'>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={6}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={7}/>
        <MarkBox currentCompMark={currentCompMark} players={players} board={board} winner={winner} currentPlayer={currentPlayer} setBoard={setBoard} switchPlayers={switchPlayers} id={8}/>
      </div>
    </div>
    </>
  )
}

export default Board