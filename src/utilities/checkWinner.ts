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

export const checkWinner = (board: (Player | null)[], players: Player[], setWinner: React.Dispatch<React.SetStateAction<Player | null>>, setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>): Player | null => {
  console.log('check winner called');
  for (const section in winningCombos) {
    const winningConditions = winningCombos[section as keyof WinningCombos]
    for (const winningCondition of winningConditions) {
      if (winningCondition.every((value) => board[value] === players[0])) {
        console.log('player 1 win');
        setWinner(players[0])
        setCurrentPlayer(null)
        return null
      } else if (winningCondition.every((value) => board[value] === players[1])) {
        console.log('player 2 win');
        setWinner(players[0])
        setCurrentPlayer(null)
        return null
      }
    }
  }
  console.log('no winner');
  return null
}