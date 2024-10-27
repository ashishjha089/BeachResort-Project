import React from "react";
import Beachbg from "../assets/beach_video(1080p).mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative w-full">
      <video src={Beachbg} className="w-full  h-screen object-cover" autoPlay loop muted />

      {/* Overlay */}
      <div className="absolute top-0 w-full h-screen bg-black opacity-50" />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl  font-bold mb-2">India's First Class Beaches</h1>
        <h2 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">Top 1% Location in India</h2>
        <form className="  flex items-center bg-gray-900/50 p-2 rounded-md ">
          <input
            className="flex-grow bg-transparent outline-none text-white  py-2 "
            type="text"
            placeholder="Search Destinations"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <AiOutlineSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
