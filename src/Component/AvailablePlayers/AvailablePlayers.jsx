import React from 'react';

const AvailablePlayers = () => {
    
    return (
      <div className="flex justify-between px-4 mt-12 ">
        <h1 className="font-bold text-3xl">Available Players</h1>
        <div className="flex-none border  rounded-lg ">
          <button className=" bg-lime-300 mr-4 font-bold text-md p-2">Available</button>
          <button className='p-2'>Selected (0)</button>
        </div>
      </div>
    );
};

export default AvailablePlayers;