import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-32 text-gray-400">
      <img className="mx-auto h-32" src="/src/assets/logo-footer.png" alt="" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-20">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-start text-white">
            About Us
          </h3>
          <p className="text-sm text-start">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-left text-white">
            Quick Links
          </h3>
          <ul className=" space-y-1 list-disc text-start">
            <li>
              <a href="#" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-start text-white">
            Subscribe
          </h3>
          <p className="text-sm mb-4 text-start">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <div className="flex">
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
      
      <div className="text-center mt-6 text-sm text-gray-400">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};


export default Footer;