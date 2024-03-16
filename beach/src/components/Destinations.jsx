import React from "react";
import r1 from "../assets/resort1.jpg"
import r2 from "../assets/resort2.jpg"
import r3 from "../assets/resort3.jpg"
import r4 from "../assets/resort4.jpg"
import r5 from "../assets/resort5.jpg"
import r6 from "../assets/resort6.jpg"
import r7 from "../assets/resort7.jpg"


const Destinations = () =>{
    return (
      <div className="max-w-[1240px] mx-auto py-16 px-4">
         <h1>All-Inclusive Resorts</h1>
         <p> India's coastal treasures await</p>
         <div className="grid grid-rows-none  md:grid-cols-5  py-4 gap-2  md:gap-4">
         <img src={r1} alt="lakshwdeep" className="w-full h-full object-cover col-span-2 md:span-3 row-span-2 " />
         <img src={r2} alt="adaman" className="w-full h-full object-cover" />
         <img src={r3} alt="goa" className="w-full h-full object-cover" />
         <img src={r4} alt="nicobar" className="w-full h-full object-cover" />
         <img src={r5} alt="kerla" className="w-full h-full object-cover" />
         <img src={r6} alt="kerla" className="w-full h-full object-cover" />
         <img src={r7} alt="kerla" className="w-full h-full object-cover" />
         </div>
      </div>
    )
}
export default Destinations; 