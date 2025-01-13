import React, { useEffect, useState } from "react";
import AvailableBtn from "../AvailableBtn/AvailableBtn";
import SelectedBtn from "../SelectedBtn/SelectedBtn";
export default function Card({ handleIsActiveState, isActive }) {
  console.log(isActive);
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
            Selected (0)
          </button>
        </div>
      </div>
      {isActive.card ?
        <AvailableBtn></AvailableBtn>
      : 
        <SelectedBtn></SelectedBtn>
      }
    </div>
  );
};



































// const Card = () => {
//   const [card, setCard] = useState([]);

//   useEffect(() => {
//     fetch("./fakeData.json")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data.players)) {
//           setCard(data.players); // Set the players array
//         } else {
//           console.error("Players is not an array:", data.players);
//         }
//       })
//       .catch((error) => console.error("Error fetching JSON:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-24 mt-8">
//       {Array.isArray(card) ? (
//         card.map((player) => (
//           <div
//             key={player.playerId}
//             className="card bg-white  border rounded-lg p-4"
//           >
//             {/* Player Image */}
//             <figure>
//               <img
//                 className="w-full h-48 rounded-lg object-cover"
//                 src={player.image || "https://via.placeholder.com/150"}
//                 alt={player.name}
//               />
//             </figure>

//             {/* Player Details */}
//             <div className="mt-4">
//               <h2 className="font-bold text-lg flex items-center">
//                 <i className="fa-solid fa-user mr-2"></i> {player.name}
//               </h2>
//               <div className=" flex items-center justify-between ">
//                 <p className="text-sm text-gray-500">
//                   <i className="fa-solid fa-flag mr-2"></i> {player.country}
//                 </p>
//                 <span className="badge badge-outline ">{player.role}</span>
//               </div>

//               {/* Additional Details */}
//               <hr className="my-3" />
//               <div className="flex flex-col space-y-2">
//                 {" "}
//                 {/* Add space between rows */}
//                 <div className="flex justify-between text-sm items-center">
//                   <strong>Rating:</strong>
//                   <span>{player.battingType || "N/A"}</span>
//                 </div>
//                 <div className="flex justify-between text-sm items-center">
//                   <strong>Left-Hand-Bat:</strong>
//                   <span>{player.battingType || "N/A"}</span>
//                 </div>
//                 <div className="flex  text-sm items-center justify-between">
//                   <strong>Price:{player.biddingPrice || "$0"}</strong>
//                   <button className="btn">Choose Player</button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Card;
