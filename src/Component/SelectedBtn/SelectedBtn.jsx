import React from 'react';

export default function SelectedBtn({
  selectedPlayers,
  handleDelete,
  handleAddMorePlayers,
  maxPlayers,
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Selected Players Count */}
      <h2 className="text-xl font-bold">
        Selected Player ({selectedPlayers.length}/{maxPlayers})
      </h2>
      <div className="space-y-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm  "
          >
            <div className="flex items-center">
              <div className="  mr-4 ">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={player.image}
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{player.name}</p>
                <p className="text-sm text-gray-500">{player.battingType}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(player.playerId)}
              className="text-red-500 hover:text-red-700"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>

      {/* Add More Player Button */}
      {selectedPlayers.length < maxPlayers && (
        <div className="mt-4">
          <button
            onClick={handleAddMorePlayers}
            className="bg-lime-300 mr-4 font-bold text-md p-2 btn"
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
}