import React, { useEffect, useState } from "react";
import AvailableBtn from "../AvailableBtn/AvailableBtn";
import SelectedBtn from "../SelectedBtn/SelectedBtn";
export default function Card({
  handleIsActiveState,
  isActive,
  selectedPlayers,
  setSelectedPlayers,
  handleDelete,
  handleIncreasePrice,
  handleAddMorePlayers,
  maxPlayers,
  setIsAvailablePlayersVisible,
  isAvailablePlayersVisible,
}) {
  return (
    <div>
      <div className="flex justify-between px-4 mt-12 ">
        <h1 className="font-bold text-3xl">Available Players</h1>
        <div className="flex-none border  rounded-lg ">
          <button
            onClick={() => handleIsActiveState("card")}
            className={`${
              isActive.card
                ? "bg-lime-300 mr-4 font-bold text-md p-2"
                : "mr-4 font-bold text-md p-2"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("selected")}
            className={`${
              isActive.card ? "  text-md p-2" : "bg-lime-300  font-bold p-2"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {isActive.card ? (
        isAvailablePlayersVisible && (
          <AvailableBtn
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            handleIncreasePrice={handleIncreasePrice}
            maxPlayers={maxPlayers}
            setIsAvailablePlayersVisible={setIsAvailablePlayersVisible}
          ></AvailableBtn>
        )
      ) : (
        <SelectedBtn
          selectedPlayers={selectedPlayers}
          handleDelete={handleDelete}
          handleAddMorePlayers={handleAddMorePlayers}
          maxPlayers={maxPlayers}
        ></SelectedBtn>
      )}
    </div>
  );
};