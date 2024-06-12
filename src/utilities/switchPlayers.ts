import { Player } from "./types";

export const switchPlayers = (players: Player[], currentPlayer: Player | null, setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>) => {
  if (currentPlayer === players[0]) {
    setCurrentPlayer(players[1]);
  } else {
    setCurrentPlayer(players[0]);
  }
}