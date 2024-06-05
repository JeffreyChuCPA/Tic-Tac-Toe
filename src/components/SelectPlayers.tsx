import React from 'react'
import { Player } from '../utilities/types'
import { determineFirstTurn } from '../utilities/determineFirstTurn'

type SelectPlayersProps = {
  players: Player[],
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>
}

const SelectPlayers: React.FC<SelectPlayersProps> = ({players, setPlayers, setCurrentPlayer}) => {

  const handlePlayerSelection = (opponent: "P2" | "Computer") => {
    const updatedPlayers = [...players]
    updatedPlayers[1].playerType = opponent
    setPlayers(updatedPlayers)
    determineFirstTurn(2, players, setCurrentPlayer)
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