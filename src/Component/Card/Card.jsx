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
  balance,
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
            onClick={() => {
              if (balance > 0) {
                handleIsActiveState("selected");
              } else {
                toast.error("Not enough balance to view selected players!", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            }}
            // disabled={balance === 0}
            className={`${
              isActive.card
                ? "text-md p-2"
                : `bg-lime-300 font-bold p-2 ${
                    balance === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`
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
            balance={balance}
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