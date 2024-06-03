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

export const checkWinner = (gameBoard: (string | null)[]): string => {
  for (const section in winningCombos) {
    const winningConditions = winningCombos[section as keyof WinningCombos]
    for (const winningCondition of winningConditions) {
      if (winningCondition.every((value) => gameBoard[value] === 'p1')) {
        return 'p1'
      } else if (winningCondition.every((value) => gameBoard[value] === 'p2')) {
        return 'p2'
      } 
    }
  }
  return ''
}