import React, { useState } from 'react'

type MarkBoxProps = {
  gameBoard: (string | null)[]
  setGameBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>,
  id: number,
  currentPlayer: string,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>
}


const MarkBox: React.FC<MarkBoxProps> = ({gameBoard, setGameBoard, id, currentPlayer, setCurrentPlayer}) => {
  const [mark, setMark] = useState<string>('')

  const switchPlayer = (currentPlayer: string): void => {
    if (currentPlayer === 'p1') {
      setCurrentPlayer('p2')
    } else {
      setCurrentPlayer('p1')
    }
  }

  const handlePlayerMark = (currentPlayer: string, mark: string) => {
    if (!mark) {
      setMark(currentPlayer)
      const updatedGameBoard: (string | null)[] = [...gameBoard]
      updatedGameBoard[id] = currentPlayer
      setGameBoard(updatedGameBoard)
      switchPlayer(currentPlayer)
    } else {
      return null
    }
  }


  return (
    <div className='markbox' onClick={() => handlePlayerMark(currentPlayer, mark)}>
      {mark === 'p1' && (<div className='mark-p1'>P1</div>)}
      {mark === 'p2' && (<div className='mark-p2'>P2</div>)}
    </div>
  )
}

export default MarkBox