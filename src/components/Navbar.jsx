import React from "react";
import Image from "../assets/beach logo.jpg"
export const Navbar = () => {
  return (  
  <div className="flex justify-center items-center border border-black h-20">
    <div>
        <img src={Image} alt="logo" className=" w-1 "/>
    </div>
  </div>
  );

};

export default Navbar;