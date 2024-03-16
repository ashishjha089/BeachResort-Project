import React, { useState } from "react";
import Image from "../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaUser, FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo,setLogo] =useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className="flex justify-between items-center  w-screen h-20 px-4  absolute z-10 text-white">
      
      <div onClick={handleNav} className={logo?'hidden':'block'}>
        <img src={Image} alt="logo" className="w-48 h-48 mt-8" />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>About Us</li>
        <li>Booking</li>
      </ul>
      <div className="px-4 hidden sm:flex ">
        <IoMdSearch size={20} />
        <FaUser size={20} />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10">
        {nav ? <AiOutlineClose  className="text-black" size={20} /> : <HiOutlineMenu size={20} />}
      </div>
      <div
        onClick={handleNav}
        className={`absolute  text-black top-0 w-full sm:w-auto sm:relative bg-gray-100/90 md:bg-transparent 
        px-4 py-7 md:flex md:flex-row md:items-center md:space-x-4 ${nav ? 'left-0' : '-left-full'}`}
       
      >
        <ul>
          <li>
            <h1>Beaches</h1>
          </li>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">About Us</li>
          <li className="border-b">Booking</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <IoLogoInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
