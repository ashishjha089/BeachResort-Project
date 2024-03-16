import React from "react";
import Beachbg from "../assets/beach_video(1080p).mp4"
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () =>{
    return(
        <div className="w-full h-full relative ">
            <video   src={Beachbg}  className=" w-full h-full object-cover" autoPlay loop muted/>
            <div className="absolute  w-full h-full top-0  bg-gray-900/50">
              <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 ">
                 <h1> India's First Class Beaches</h1>
                 <h2 className="py-4"> Top 1% Location In India</h2>
                 <form className="flex justify-between items-center max-w-[550px] mx-auto  w-full border p-1
                 rounded-md  text-black  bg-gray-100/90">
                    <div>
                        <input  className="bg-transparent w-[300px] sm:w-[400px] font-[poppins] outline-none"
                        type="text" placeholder="Search Destinations"/>
                    </div>
                    <div>
                    <button><AiOutlineSearch  size={20} className="icon" style={{color:'#ffffff'}}/></button>
                    </div>
                 </form>
              </div>
            </div>
        </div>
        
        
    )
}

export default Hero;