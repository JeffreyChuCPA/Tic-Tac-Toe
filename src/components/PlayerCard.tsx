import React, { useState } from "react";
import { Player } from "../utilities/types";

type PlayerCardProps = {
  winner: Player | null
}

const PlayerCard: React.FC<PlayerCardProps> = ({winner}) => {
  const [winCount, setWinCount] = useState<number>(0)

  return (
    <div className="player-card">
      PlayerCard
      </div>)
};

export default PlayerCard;
