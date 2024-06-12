import React from "react";
import { Player } from "../utilities/types";

type ResultsCardProps = {
  winner: Player | null,
  allMarked: boolean,
  resetGame: () => void
};

const ResultsCard: React.FC<ResultsCardProps> = ({ winner, allMarked, resetGame }) => {

  const handlePlayAgain = (): void => {
    resetGame()
  } 

  return (
    <>
      {winner?.playerType && 
        <div className="results-card">
          <span className="results-text">{`Winner is ${winner.playerType}!`}</span>
          <button className="results-btn" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
        </div>}
      {!winner && allMarked ? 
        <div className="results-card">
          <span className="results-text">{`It's a tie!`}</span>
          <button className="results-btn" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
        </div> : null}
    </>
  )
};

export default ResultsCard;
