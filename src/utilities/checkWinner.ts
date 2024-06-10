import { Player } from "./types"

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

export const checkWinner = (gameBoard: (Player | null)[], players: Player[], setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>): Player | null => {
  console.log('check winner called');
  for (const section in winningCombos) {
    const winningConditions = winningCombos[section as keyof WinningCombos]
    for (const winningCondition of winningConditions) {
      if (winningCondition.every((value) => gameBoard[value] === players[0])) {
        // setCurrentPlayer(null)
        console.log('player 1 win');
        return players[0]
      } else if (winningCondition.every((value) => gameBoard[value] === players[1])) {
        // setCurrentPlayer(null)
        console.log('player 2 win');
        return players[1]
      }
    }
  }
  console.log('no winner');
  return null
}