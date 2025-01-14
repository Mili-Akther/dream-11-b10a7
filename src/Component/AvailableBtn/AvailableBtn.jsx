import React, { useState } from 'react';
import Card from '../Card/Card';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

export default function AvailableBtn({
  setSelectedPlayers,
  selectedPlayers,
  handleIncreasePrice,
  maxPlayers,
  setIsAvailablePlayersVisible,
 
}) {
  const handleSelectedPlayer = (player) => {
    const isexist = selectedPlayers.find((p) => p.playerId === player.playerId);
    if (isexist) {
      alert("r add kora jabeh na");
      return;
    }
    if (selectedPlayers.length >= maxPlayers) {
      alert("Maximum players reached!");
      return;
    }

    // Add player to selected list
    handleIncreasePrice(player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <div>
      <AvailablePlayers
        handleSelectedPlayer={handleSelectedPlayer}
        selectedPlayers={selectedPlayers}
        setIsAvailablePlayersVisible={setIsAvailablePlayersVisible}
      />
    </div>
  );
};

