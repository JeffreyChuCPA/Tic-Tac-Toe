import React, { useEffect, useState } from "react";
import { Player } from "../utilities/types";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";
import { checkWinner } from "../utilities/checkWinner";

type MarkBoxProps = {
  gameBoard: (Player | null)[];
  setGameBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>;
  id: number;
  currentPlayer: Player | null;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
  winner: Player | null | undefined;
  players: Player[];
  computerMark: number | null
};

const MarkBox: React.FC<MarkBoxProps> = ({
  gameBoard,
  setGameBoard,
  id,
  currentPlayer,
  setCurrentPlayer,
  winner,
  players,
  computerMark
}) => {
  const [mark, setMark] = useState<Player | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    {
      gameBoard.every((value) => value === null) && setMark(null);
    }
  }, [gameBoard]);

  useEffect(() => {
    if (currentPlayer?.playerType === "Computer" && id === computerMark) {
      setMark(currentPlayer);
      const updatedGameBoard: (Player | null)[] = [...gameBoard];
      updatedGameBoard[id] = currentPlayer;
      setGameBoard(updatedGameBoard);
      switchPlayer(currentPlayer);
    }
  }, [currentPlayer])

  const switchPlayer = (currentPlayer: Player | null): void => {
    if (currentPlayer === players[0]) {
      setCurrentPlayer(players[1]);
    } else {
      setCurrentPlayer(players[0]);
    }
  };

  const handlePlayerMark = (
    currentPlayer: Player | null,
    mark: Player | null
  ) => {
    if (winner) {
      setIsHovered(false)
      return
    }
    if (!mark) {
      setMark(currentPlayer);
      const updatedGameBoard: (Player | null)[] = [...gameBoard];
      updatedGameBoard[id] = currentPlayer;
      setGameBoard(updatedGameBoard);
      setIsHovered(false)
      switchPlayer(currentPlayer);
    } else {
      return null;
    }
  };

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className="markbox"
      id={id.toString()}
      onClick={() => handlePlayerMark(currentPlayer, mark)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {mark === players[0] && <div className="mark-cross"><img className="mark-cross-img cross-animation" src={cross} /></div>}
        {mark === players[1] && <div className="mark-circle"><img className="mark-circle-img circle-animation" src={circle} /></div>}
        {isHovered && !mark ? (
          <>
            {currentPlayer === players[0] && <div className="mark-cross"><img className="mark-cross-img hovered" src={cross} /></div>}
            {currentPlayer?.playerType === "P2" && <div className="mark-circle"><img className="mark-circle-img hovered" src={circle} /></div>}
          </>
        ) : null}
    </div>
  );
};

export default MarkBox;
