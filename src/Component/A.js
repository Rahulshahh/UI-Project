import React from "react";
import { AiFillBank } from "react-icons/ai";
const A = () => {
  return (
    <div className="flex lg:flex-col md:justify-between px-2 md-px-5 lg:px-20 pt-5 ">
      <div className=" w-[40%] md:w-[80%] lg:w-full shadow-lg grid grid-cols-1 md:grid-cols-3  border-green-200 "> 
        <div className="h-40 ">
          <img
            className="h-40 w-full "
            src="https://media.istockphoto.com/id/1211174464/photo/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-grass-and-blue-sky.jpg?s=612x612&w=0&k=20&c=h0XtWGD8asz_hfDVus7SWwOrtAFlZYfr7wdStKCQv14="
          />
        </div>
        <div className=" w-full border px-4 py-3 lg:py-6">
          <div className="flex gap-x-2 md:flex-col lg:flex-row lg:justify-between lg:items-center text-base font semibold ">
            <div className="font-normal text-sm lg:font-medium lg:text-base"> DETACHED HOUSE</div>
            <div className="flex items-center gap-x-1 ">
              <div className="h-0.5 w-0.5 rounded-full bg-black"></div>
              <div className="text-gray-700 text-sm font-normal lg: lg:text-bas">5Y OLD</div>
            </div>
          </div>
          <div className="font-medium  lg:font-bold lg:text-3xl text-xl"> $ 750,000</div>
          <div className="text-gray-400">742 Evergreen Terrace</div>
        </div>
        <div className="h-40 w-full border  grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" border-0 lg:border-r">
            <div className="pl-4 mt-2 pb-2 lg:mt-6 border-b lg:border-0  ">
              <div className="text-gray-400 font-medium lg:font-semibold text-sm lg:text-base ">
               
                REALTOR
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbPbNtIIuUSO36oIxuR0R4Rk9yPVCmZ0IPT_FGhKYTGFiLc4dHZAFcSvm3Vtc6n0aC-I&usqp=CAU"
                />
                <div>
                  <div className="font-normal text-sm lg:font-medium lg:text-base">Rahul</div>
                  <div className="text-gray-400 font-normal text-sm lg:font-medium lg:text-bas ">(555) 5555-4321</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 pl-4 mt-2 lg:pt-8   ">
              <div className="flex items-center gap-x-3">
                <AiFillBank />
                <h1>3 Bedroooms</h1>
              </div>
              <div className="flex items-center gap-x-3">
                <AiFillBank />
                <h1>2 Bathrooms</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  lg:mt-10 w-[25%] md:w-[60%]  ml-4 lg:ml-0    ">
        <div className="text-black font-bold text-sm">Element of Sequence</div>
        <div className=" w-full lg:w- grid grid-cols-1 md:grid-cols-4 mt-5">
          <div className="border border-black  h-8  md:h-16  place-content-center grid">Image</div>
          <div className=" grid  grid-cols-1 lg:grid-cols-2 col-span-1 lg:col-span-2">
            <div className="border border-black h-8  lg:h-16 place-content-center grid">
              Price
            </div>
            <div className=" border border-black h-8 lg:h-16 place-content-center grid">
              Reabor
            </div>
          </div>
          <div className="border border-black  h-8  md:h-16  place-content-center grid">Stats</div>
        </div>
      </div>
    </div>
  );
};

export default A;
