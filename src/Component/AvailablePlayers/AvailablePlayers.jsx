import React, { useEffect, useState } from 'react';

import SinglePlayerCards from '../SinglePlayerCards/SinglePlayerCards';

export default function AvailablePlayers (){
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {    
          setPlayers(data.players);
   
      })
      
  }, []);

  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-24 mt-8">
        {players.map((p) => (
          <SinglePlayerCards key={p.playerId} player={p}></SinglePlayerCards>
        ))}
      </div>
    </div>
  );
};

 


























// export default function AvailablePlayers({ handleIsActiveState, isActive }) {
//   console.log(isActive);
//   return (
//     <div>
//       <div className="flex justify-between px-4 mt-12 ">
//         <h1 className="font-bold text-3xl">Available Players</h1>
//         <div className="flex-none border  rounded-lg ">
//           <button
//             onClick={() => handleIsActiveState("available")}
//             className={`${
//               isActive.available
//                 ? "bg-lime-300 mr-4 font-bold text-md p-2"
//                 : "mr-4 font-bold text-md p-2"
//             }`}
//           >
//             Available
//           </button>
//           <button
//             onClick={() => handleIsActiveState("selected")}
//             className={`${
//               isActive.available
//                 ? "  text-md p-2"
//                 : "bg-lime-300  font-bold p-2"
//             }`}
//           >
//             Selected (0)
//           </button>
//         </div>
//       </div>
//       {isActive.available ? (
//         <AvailableBtn></AvailableBtn>
//       ) : (
//         <SelectedBtn></SelectedBtn>
//       )}
//     </div>
//   );
// };

