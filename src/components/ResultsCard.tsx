import React from "react";

type ResultsCardProps = {
  winner: string,
  setWinner: React.Dispatch<React.SetStateAction<string>>,
  allMarked: boolean,
  setGameBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>
};

const ResultsCard: React.FC<ResultsCardProps> = ({ winner, setWinner, allMarked, setGameBoard }) => {

  const handlePlayAgain = (): void => {
    setWinner('');
    const newBoard: (string | null)[] = Array(9).fill(null)
    setGameBoard(newBoard)
  } 

  return (
    <>
      {winner && 
        <div className="results">
          <span className="results-text">{`Winner is ${winner}!`}</span>
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
