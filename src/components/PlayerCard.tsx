import React, { useEffect, useState } from "react";
import { Player } from "../utilities/types";

type PlayerCardProps = {
  winner: Player | null;
  selectedPlayer: Player | null;
  currentPlayer: Player | null;
  id: string
};

const PlayerCard: React.FC<PlayerCardProps> = ({winner, selectedPlayer, currentPlayer, id}) => {
  const [winCount, setWinCount] = useState<number>(0)

  useEffect(() => {
    if (winner?.playerType === selectedPlayer?.playerType) {
      setWinCount(prevWinCount => prevWinCount + 1)
    }
  }, [selectedPlayer?.playerType, winner]);

  return (
    <div id={id} className={selectedPlayer === currentPlayer ? "player-card current" : "player-card"}>
      <div className="player-title">{selectedPlayer?.playerType}</div>
      <div className="score">{winCount}</div>
    </div>
  );
};

export default PlayerCard;
