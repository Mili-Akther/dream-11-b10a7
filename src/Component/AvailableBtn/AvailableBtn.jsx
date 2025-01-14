import React, { useState } from 'react';
import Card from '../Card/Card';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

export default function AvailableBtn({
  setSelectedPlayers,
  selectedPlayers,
  handleIncreasePrice,
}) {
  const handleSelectedPlayer = (player) => {
    const isexist = selectedPlayers.find((p) => p.playerId === player.playerId);
    if (isexist) {
      alert("r add kora jabeh na");
    } else {
      handleIncreasePrice(player.biddingPrice);
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer);
    }
  };
  return (
    <div>
      <AvailablePlayers
        handleIncreasePrice={handleIncreasePrice}
        handleSelectedPlayer={handleSelectedPlayer}
      ></AvailablePlayers>
    </div>
  );
};

