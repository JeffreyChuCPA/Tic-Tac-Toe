import React, { useEffect, useState } from "react";
import { Player } from "../utilities/types";

type PlayerCardProps = {
  winner: Player | null;
  selectedPlayer: Player | null;
};

const PlayerCard: React.FC<PlayerCardProps> = ({winner, selectedPlayer}) => {
  const [winCount, setWinCount] = useState<number>(0)

  useEffect(() => {
    if (winner?.playerType === selectedPlayer?.playerType) {
      setWinCount(winCount + 1)
    }
  }, [winner]);

  return (
    <div className="player-card">
      <div className="player-title">{selectedPlayer?.playerType}</div>
      <div className="score">{winCount}</div>
    </div>
  );
};

export default PlayerCard;
