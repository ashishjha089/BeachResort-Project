import React from "react";
import Beachbg from "../assets/beach_video(1080p).mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <video src={Beachbg} className="w-full h-full object-cover" autoPlay loop muted />
      <div className="absolute top-0 w-full h-full bg-gray-900/50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">India's First Class Beaches</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl py-4">Top 1% Location In India</h2>
          <form className="max-w-lg mx-auto border p-1 rounded-md text-black bg-gray-100/90">
            <div className="flex items-center border-b">
              <input
                className="flex-grow bg-transparent outline-none py-2 px-4 text-white"
                type="text"
                placeholder="Search Destinations"
              />
              <button>
                <AiOutlineSearch size={20} className="icon" style={{ color: "#ffffff" }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
