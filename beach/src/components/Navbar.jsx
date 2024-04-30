import React, { useState } from "react";
//import Image from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav >
      <div className="w-full h-10 flex justify-between items-center absolute  mt-4 z-10">
        {/* Logo */}
        <h1 className="text-white ml-5"> Beach resort</h1>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About Us
          </a>
        </div>

        {/* Order Button */}
        <button className="hidden md:block text-white bg-blue-500 hover:bg-blue-700 mr-5  font-bold py-2 px-4 rounded">
          Book Now
        </button>

        {/* Hamburger Menu */}
        <div className="md:hidden absolute items-center top-[-2px] right-5">
          {isModalOpen ? (
            <button
              className="text-black  
               focus:outline-none"
              onClick={closeModal}
            >
              <FaWindowClose />
            </button>
          ) : (
            <button
              className="text-black focus:outline-none"
              onClick={openModal}
            >
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </div>

      {/* Dark Background Overlay */}
      {isModalOpen && (
        <div className="  opacity-50 z-40" onClick={closeModal}></div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className=" z-50 top-0  flex fixed w-full  bg-white">
          <div className=" rounded-lg p-8  mt-10 w-full h-screen text-lg  ">
            <ul className="text-gray-800  text-lg w-full h-screen  space-y-4">
              <li className="py-2">
                <a
                  href="#"
                  className="block border-b border-black text-black font-bold hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block border-b border-black text-black font-bold  hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block border-b border-black text-black font-bold hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block border-b border-black text-black font-bold hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
              
              <li>
                <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </li>
              <div className="flex justify-evenly my-2">
                <FaFacebook className="icon " size={40} />
                <FaTwitter className="icon" size={40} />
                <IoLogoInstagram className="icon" size={40} />
                <FaYoutube className="icon" size={40} />
              </div>
            </ul>

            <button
             className={`absolute  top-3 right-5    text-gray-600 hover:text-gray-800 focus:outline-none `}
              onClick={closeModal}
             >
              <FaWindowClose />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
