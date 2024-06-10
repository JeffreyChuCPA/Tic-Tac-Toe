import React, { useEffect, useState } from 'react'
import { Player } from '../utilities/types'

type GameDataCardProps = {
  winner: Player | null,
  allMarked: boolean
}

const GameDataCard: React.FC<GameDataCardProps> = ({winner, allMarked}) => {
  const [gameAmt, setGameAmt] = useState<number>(0)
  const [tieAmt, setTieAmt] = useState<number>(0)
  const [winAmt, setWinAmt] = useState<number>(0)

  useEffect(() => {
    if (winner) {
      setGameAmt(gameAmt + 1)
      setWinAmt(winAmt + 1)
    } else if (allMarked && winner === null) {
      setGameAmt(gameAmt + 1)
      setTieAmt(tieAmt + 1)
    }
    // console.log('gamedata useEffect rendered');
  }, [winner, allMarked])

  return (
    <div className='game-data-card'>
      <div className='game-data'><span>Games </span><span>{gameAmt}</span></div>
      <div className='game-data'><span>Ties </span><span>{tieAmt}</span></div>
      <div className='game-data'><span>Wins </span><span>{winAmt}</span></div>
    </div>
  )
}

export default GameDataCard