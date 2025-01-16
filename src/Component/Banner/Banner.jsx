import React from 'react';
import Bannermain from '../../assets/banner-main.png'
const Banner = ({ handleClaimCredit }) => {
  return (
    <div
      className="hero text-center py-20 bg-black rounded-3xl"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/qWqTkfc/bg-shadow.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex flex-col items-center  bg-opacity-50 p-10 rounded-lg">
        {/* Logo */}
        <img
          src={Bannermain}
          alt="Cricket Banner Logo"
          className="h-32 w-auto mb-4"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-6">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button
          onClick={handleClaimCredit}
          className="btn btn-primary bg-lime-300 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 text-lg"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;