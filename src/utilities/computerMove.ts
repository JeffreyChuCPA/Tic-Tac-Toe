import { Player } from "./types";

// Check if a move would result in a win
const checkWinningMove = (
  board: (Player | null)[],
  player: Player,
  position: number
): boolean => {
  const boardCopy = [...board];
  boardCopy[position] = player;

  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      boardCopy[i] === player &&
      boardCopy[i + 1] === player &&
      boardCopy[i + 2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      boardCopy[i] === player &&
      boardCopy[i + 3] === player &&
      boardCopy[i + 6] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    boardCopy[0] === player &&
    boardCopy[4] === player &&
    boardCopy[8] === player
  ) {
    return true;
  }
  if (
    boardCopy[2] === player &&
    boardCopy[4] === player &&
    boardCopy[6] === player
  ) {
    return true;
  }

  return false;
};

// Find a winning move for the given player
const findWinningMove = (
  board: (Player | null)[],
  player: Player
): number | null => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null && checkWinningMove(board, player, i)) {
      return i;
    }
  }
  return null;
};

// Get available corner positions
const getAvailableCorners = (board: (Player | null)[]): number[] => {
  const corners = [0, 2, 6, 8];
  return corners.filter((corner) => board[corner] === null);
};

// Check if center position is available
const isCenterAvailable = (board: (Player | null)[]): boolean => {
  return board[4] === null;
};

//Function called to return the computer's move
export const getComputerMove = (
  board: (Player | null)[],
  computerPlayer: Player,
  humanPlayer: Player
): number => {
  // 1. Try to win
  const winningMove = findWinningMove(board, computerPlayer);
  if (winningMove !== null) {
    return winningMove;
  }

  // 2. Block opponent's winning move
  const blockingMove = findWinningMove(board, humanPlayer);
  if (blockingMove !== null) {
    return blockingMove;
  }

  // 3. Take center if available
  if (isCenterAvailable(board)) {
    return 4;
  }

  // 4. Take available corner
  const availableCorners = getAvailableCorners(board);
  if (availableCorners.length > 0) {
    return availableCorners[
      Math.floor(Math.random() * availableCorners.length)
    ];
  }

  // 5. Take any available space
  const availableMoves = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index): index is number => index !== null);

  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};
