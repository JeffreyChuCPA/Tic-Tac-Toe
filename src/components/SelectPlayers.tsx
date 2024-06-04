import React from 'react'
import { Player } from '../utilities/types'

type SelectPlayersProps = {
  players: Player[],
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>
}

const SelectPlayers: React.FC<SelectPlayersProps> = ({players, setPlayers, setCurrentPlayer}) => {

  const determineFirstTurn = (numberOfPlayers: number, players: Player[]): void => {
    const randomTurn: number = Math.floor(Math.random() * numberOfPlayers)
    const firstTurn: Player = randomTurn ? players[0] : players[1]
    return setCurrentPlayer(firstTurn)
  }

  const handlePlayerSelection = (opponent: "P2" | "Computer") => {
    const updatedPlayers = [...players]
    updatedPlayers[1].playerType = opponent
    setPlayers(updatedPlayers)
    determineFirstTurn(2, players)
  }

  return (
    <div className='player-selection'>
      Select Opponent
        <button id='P2' className='player-selection-btn' onClick={() => handlePlayerSelection('P2')}>
          P1 vs P2 
        </button>
        <button id='Computer' className='player-selection-btn' onClick={() => handlePlayerSelection('Computer')}>
          P1 vs Computer 
        </button>
    </div>
  )
}

export default SelectPlayers