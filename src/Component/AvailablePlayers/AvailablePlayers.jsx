import React, { useEffect, useState } from 'react';

import SinglePlayerCards from '../SinglePlayerCards/SinglePlayerCards';

export default function AvailablePlayers({ handleSelectedPlayer }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data.players);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-24 mt-8">
        {players.map((p) => (
          <SinglePlayerCards
            handleSelectedPlayer={handleSelectedPlayer}
            key={p.playerId}
            player={p}
          ></SinglePlayerCards>
        ))}
      </div>
    </div>
  );
};

 

























