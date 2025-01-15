import React, { useState } from 'react';
import { toast } from "react-toastify";
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

export default function AvailableBtn({
  setSelectedPlayers,
  selectedPlayers,
  handleIncreasePrice,
  maxPlayers,
  setIsAvailablePlayersVisible,
  balance,
}) {
  const handleSelectedPlayer = (player) => {
    const isexist = selectedPlayers.find((p) => p.playerId === player.playerId);
    if (isexist) {
      toast.error("player already selected", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (selectedPlayers.length >= maxPlayers) {
      toast.error("Maximum players reached!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (balance < player.biddingPrice) {
      toast.error("Not enough balance to add this player Claim free credit!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        balance={balance}
      />
      {/* <ToastContainer/> */}
    </div>
  );
};

