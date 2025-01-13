import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className=" -mb-32 flex justify-center items-center w-4/5 mx-auto p-8 border backdrop-filter border-white  bg-white blurred-border rounded-xl ">
      <div
        className=" py-10 text-center rounded-lg shadow-md w-11/12 bg-white  "
        style={{
          backgroundImage: "url('https://i.ibb.co.com/qWqTkfc/bg-shadow.png')",
          backgroundSize: "cover",  
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-gray-700 mb-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs mr-2"
          />
          <button className="btn bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;