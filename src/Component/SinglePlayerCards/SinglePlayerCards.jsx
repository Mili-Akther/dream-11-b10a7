import React from 'react';

export default function SinglePlayerCards({ player, handleSelectedPlayer }) {

  const { biddingPrice, name, country, image, role, battingType } = player;
  return (
    <div>
      <div className="players bg-white  border rounded-lg p-4">
        {/* Player Image */}
        <figure>
          <img
            className="w-full h-48 rounded-lg object-cover"
            src={image || "https://via.placeholder.com/150"}
            alt={name}
          />
        </figure>

        {/* Player Details */}
        <div className="mt-4">
          <h2 className="font-bold text-lg flex items-center">
            <i className="fa-solid fa-user mr-2"></i> {name}
          </h2>
          <div className=" flex items-center justify-between ">
            <p className="text-sm text-gray-500">
              <i className="fa-solid fa-flag mr-2"></i> {country}
            </p>
            <span className="badge badge-outline ">{role}</span>
          </div>

          {/* Additional Details */}
          <hr className="my-3" />
          <div className="flex flex-col space-y-2">
            {" "}
            {/* Add space between rows */}
            <div className="flex justify-between text-sm items-center">
              <strong>Rating:</strong>
              <span>{battingType}</span>
            </div>
            <div className="flex justify-between text-sm items-center">
              <strong>Left-Hand-Bat:</strong>
              <span>{battingType}</span>
            </div>
            <div className="flex  text-sm items-center justify-between">
              <strong>Price:{biddingPrice}</strong>
              <button onClick={() => handleSelectedPlayer(player)} className="btn">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
