import React from "react";

type ResultsCardProps = {
  winner: string,
  setWinner: React.Dispatch<React.SetStateAction<string>>,
  setGameBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>
};

const ResultsCard: React.FC<ResultsCardProps> = ({ winner, setWinner, setGameBoard }) => {

  const handlePlayAgain = (): void => {
    setWinner('');
    const newBoard: (string | null)[] = Array(9).fill(null)
    setGameBoard(newBoard)
  } 

  return (
    <>
      {winner && 
        <div className="results">
          {`Winner is ${winner}!`}
          <button className="results-btn" onClick={() => handlePlayAgain()}>
            Play Again
          </button>
          </div>}
    </>
  )
};

export default ResultsCard;
