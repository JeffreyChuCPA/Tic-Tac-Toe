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
      setGameAmt(prev => prev + 1)
      setWinAmt(prev => prev + 1)
    } else if (allMarked && winner === null) {
      setGameAmt(prev => prev + 1)
      setTieAmt(prev => prev + 1)
    }
    // console.log('gamedata useEffect rendered');
  }, [allMarked, winner])

  return (
    <div className='game-data-card'>
      <div className='game-data'><span>Games </span><span>{gameAmt}</span></div>
      <div className='game-data'><span>Ties </span><span>{tieAmt}</span></div>
      <div className='game-data'><span>Wins </span><span>{winAmt}</span></div>
    </div>
  )
}

export default GameDataCard