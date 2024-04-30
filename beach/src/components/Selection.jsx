import React from "react";
import r1 from "../assets/resort1.jpg"
import r2 from "../assets/resort2.jpg"
import r3 from "../assets/resort3.jpg"
import r4 from "../assets/resort4.jpg"
// import r5 from "../assets/resort5.jpg"
import r6 from "../assets/resort6.jpg"
import r7 from "../assets/resort7.jpg"

const Selection = () => {
    return( 
        <div className="max-w-[1240px] mx-auto  px-4 py-16 grid grid-row  sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative">
            <img src={r1} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Goa</p>
              </div>            
          </div>
          <div className="relative">
            <img src={r2} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Kerala</p>
              </div>            
          </div>
          <div className="relative">
            <img src={r3} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Andaman and Nicobar</p>
              </div>            
          </div>
          <div className="relative">
            <img src={r6} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Daman and Diu</p>
              </div>            
          </div>
          <div className="relative">
            <img src={r7} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Lakshwdeep</p>
              </div>            
          </div>
          <div className="relative">
            <img src={r4} alt="goa"/>
              <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-6 text-2xl font-bold text-white absolute">Tamil Nadu</p>
              </div>            
          </div>
         

        </div>
    )
}

export default Selection; 