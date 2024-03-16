import React from "react";
 import { RiCustomerService2Fill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const Services = () => {
    return(
         <div className="max-w-[1240px]  mx-auto  grid  lg:grid-cols-3  gap-4  px-4 py-16 ">
            
            <div className="lg:col-span-2 flex  flex-col  justify-evenly ">
            <div>
                <h2>LUXURY  INCLUDED  VACATIONS FOR TWO PEOPLE</h2>
                <p>
                Embark on a romantic journey with our luxury 
                included vacations craftedfor couples seeking
                the epitome of indulgence.From secluded beaches
                to stunning landscapes, immerse yourselves
                in luxury accommodations and personalized service. 
                Indulge in gourmet dining experiences with world-class 
                cuisine and fine wines. Unwind together with couples' 
                massages and adventurous excursions. Whether you're 
                celebrating a honeymoon, anniversary, or simply 
                cherishing time together, our meticulously 
                curated experiences promise unforgettable moments 
                of romance and relaxation.  
                </p>
              </div>
              <div className="grid  sm:grid-cols-2 gap- py-4">
                <div className="flex flex-col lg:flex-row items-center text-center ">
                    <button><RiCustomerService2Fill size={50} /></button>
                    <div>
                     <h3 className="py-2">LEADING SERVICES</h3>
                      <p className=" py-1">ALL-INCLUDES  COMPANY  FOR 20  YEARS-IN-A-ROW</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center text-center ">
                     <button><MdTravelExplore size={50}/></button>
                    <div>
                     <h3 className="py-2">LEADING SERVICES</h3>
                     <p className="py-1">ALL-INCLUDES  COMPANY  FOR 20  YEARS-IN-A-ROW</p>
                    </div>
                </div>
              </div>
               
            </div>
            
            <div>right</div>
         </div>
    );
};

export default Services;