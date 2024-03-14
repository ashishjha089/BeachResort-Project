import React from "react";
import Image from "../assets/beach logo.jpg"
export const Navbar = () => {
  return (  
  <div className="flex justify-center items-center border border-black h-20">
    <div className="w-10 border-4 border-black">
        <img src={Image} alt="logo" className=""/>
    </div>
  </div>
  );

};

export default Navbar;