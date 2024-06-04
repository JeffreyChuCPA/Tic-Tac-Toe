import React from "react";
import { Player } from "../utilities/types";

type ResultsCardProps = {
  winner: Player | null ,
  setWinner: React.Dispatch<React.SetStateAction<Player | null >>,
  allMarked: boolean,
  setGameBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>
};

const ResultsCard: React.FC<ResultsCardProps> = ({ winner, setWinner, allMarked, setGameBoard }) => {

  const handlePlayAgain = (): void => {
    setWinner(null);
    const newBoard: (Player | null)[] = Array(9).fill(null)
    setGameBoard(newBoard)
  } 

  return (
    <>
      {winner?.playerType && 
        <div className="results">
          <span className="results-text">{`Winner is ${winner.playerType}!`}</span>
          <button className="results-btn" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
        </div>}
      {!winner && allMarked ? 
        <div className="results">
          <span className="results-text">{`It's a tie!`}</span>
          <button className="results-btn" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
        </div> : null}
    </>
  )
};

export default ResultsCard;
