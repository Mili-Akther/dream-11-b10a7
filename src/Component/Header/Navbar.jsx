import React from "react";

const Navbar = ({ price }) => {
  return (
    <div className="navbar px-4 w-full">
      <div className="flex-1">
        {/* Logo */}
        <a href="/" className="flex items-center text-lg font-bold">
          <img
            src="/src/assets/logo.png"
            alt="Cricket Logo"
            className="h-16 w-16 mr-2"
          />
        </a>
      </div>

      <div className="flex-none ">
        {/* Navigation links */}
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#fixture">Fixture</a>
          </li>
          <li>
            <a href="#teams">Teams</a>
          </li>
          <li>
            <a href="#schedules">Schedules</a>
          </li>
        </ul>

        {/* Coin Button */}
        <div className="ml-4">
          <button className="btn btn-sm flex items-center text-lg">
            <span>{price} Coin</span>
            <span className="ml-1 text-yellow-500">🪙</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
