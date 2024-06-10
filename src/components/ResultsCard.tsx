import React from "react";
import { Player } from "../utilities/types";
import { determineFirstTurn } from "../utilities/determineFirstTurn";

type ResultsCardProps = {
  winner: Player | null ,
  setWinner: React.Dispatch<React.SetStateAction<Player | null >>,
  allMarked: boolean,
  setAllMarked: (value: React.SetStateAction<boolean>) => void,
  setGameBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>,
  players: Player[],
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>
};

const ResultsCard: React.FC<ResultsCardProps> = ({ winner, setWinner, allMarked, setAllMarked, setGameBoard, players, setCurrentPlayer }) => {

  const handlePlayAgain = (): void => {
    setWinner(null);
    setAllMarked(false)
    const newBoard: (Player | null)[] = Array(9).fill(null)
    setGameBoard(newBoard)
    determineFirstTurn(2, players, setCurrentPlayer)
    console.log('clicked played again');
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
