import { Player } from "./types"

export const determineFirstTurn = (numberOfPlayers: number, players: Player[], setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>): void => {
  const randomTurn: number = Math.floor(Math.random() * numberOfPlayers)
  const firstTurn: Player = randomTurn ? players[0] : players[1]
  return setCurrentPlayer(firstTurn)
}