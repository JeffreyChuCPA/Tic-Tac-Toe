import React, { useEffect, useState } from "react";
import { Player } from "../utilities/types";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

type MarkBoxProps = {
  id: number;
  currentPlayer: Player | null;
  players: Player[];
  board: (Player | null)[],
  winner: Player | null,
  currentCompMark:  number | null,
  setBoard: React.Dispatch<React.SetStateAction<(Player | null)[]>>,
  switchPlayers: () => void
};

const MarkBox: React.FC<MarkBoxProps> = ({
  id,
  currentPlayer,
  players,
  board,
  winner,
  currentCompMark,
  switchPlayers,
  setBoard,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (currentPlayer?.playerType === "Computer" && id === currentCompMark) {
      
      const newBoard = [...board]
      if (currentCompMark !== null) {
        newBoard[currentCompMark] = currentPlayer
        setBoard(newBoard)
        switchPlayers()
      }
    }

  }, [board, currentCompMark, currentPlayer, id, setBoard, switchPlayers])

  const handlePlayerMark = () => {
    if (!board[id] && !winner) {
      const newBoard = [...board]
      newBoard[id] = currentPlayer
      setBoard(newBoard)
      setIsHovered(false)
      switchPlayers()
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
      onClick={() => handlePlayerMark()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {board[id] === players[0] && <div className="mark-cross"><img className="mark-cross-img cross-animation" src={cross} /></div>}
        {board[id] === players[1] && <div className="mark-circle"><img className="mark-circle-img circle-animation" src={circle} /></div>}
        {id === currentCompMark && !winner && <div className="mark-circle"><img className="mark-circle-img circle-animation" src={circle} /></div>}
        {isHovered && !board[id] && !winner ? (
          <>
            {currentPlayer === players[0] && <div className="mark-cross"><img className="mark-cross-img hovered" src={cross} /></div>}
            {currentPlayer?.playerType === "P2" && <div className="mark-circle"><img className="mark-circle-img hovered" src={circle} /></div>}
          </>
        ) : null}
    </div>
  );
};

export default MarkBox;
