import React, { useEffect, useState } from "react";
import { Player } from "../utilities/types";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

type MarkBoxProps = {
  gameBoard: (Player | null)[];
  setGameBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>;
  id: number;
  currentPlayer: Player | null;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
  winner: Player | null | undefined;
  players: Player[];
};

const MarkBox: React.FC<MarkBoxProps> = ({
  gameBoard,
  setGameBoard,
  id,
  currentPlayer,
  setCurrentPlayer,
  winner,
  players
}) => {
  const [mark, setMark] = useState<Player | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    {
      gameBoard.every((value) => value === null) && setMark(null);
    }
  }, [gameBoard]);

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
      switchPlayer(currentPlayer);
      setIsHovered(false)
    } else {
      return null;
    }
  };

  const handleMouseEnter = (): void => {
    setIsHovered(true);
    console.log('hovered');
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    console.log('not hovered');
  };

  return (
    <div
      className="markbox"
      id={id.toString()}
      onClick={() => handlePlayerMark(currentPlayer, mark)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {mark === players[0] && <div className="mark-cross"><img className="mark-cross-img" src={cross} /></div>}
        {mark === players[1] && <div className="mark-circle"><img className="mark-circle-img" src={circle} /></div>}
        {isHovered && !mark ? (
          <>
            {currentPlayer === players[0] && <div className="mark-cross"><img className="mark-cross-img hovered" src={cross} /></div>}
            {currentPlayer === players[1] && <div className="mark-circle"><img className="mark-circle-img hovered" src={circle} /></div>}
          </>
        ) : null}
    </div>
  );
};

export default MarkBox;
