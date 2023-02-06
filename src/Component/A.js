import React from "react";
import { AiFillBank} from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
const A = () => {
  return (
  <div className="bg-gray-100 w-full min- h-screen justify-center">
      <div className=" flex lg:flex-col md:justify-between px-2 md-px-5 lg:px-20 pt-5 ">
      <div className="rounded w-[60%] md:w-[80%] lg:w-full shadow-2xl grid grid-cols-1 md:grid-cols-3 "> 
        <div className="h-40 relative ">
       <FiHeart className="h-8 w-8 absolute right-3 top-3 md:left-3 text-white"/>   
          <img
            className="h-40 w-full rounded-tr rounded-tl md:rounded-tr-none
            md:rounded-bl "
            src="https://media.istockphoto.com/id/1211174464/photo/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-grass-and-blue-sky.jpg?s=612x612&w=0&k=20&c=h0XtWGD8asz_hfDVus7SWwOrtAFlZYfr7wdStKCQv14="
          />
        </div>
        <div className=" bg-white md:bg-gray-100  w-full  px-4 py-3 lg:py-6 md:order-1 md:border-l lg:order-none">
          <div className="flex gap-x-2 md:flex-col lg:flex-row lg:justify-between lg:items-center text-base font semibold ">
            <div className="font-normal text-sm lg:font-medium lg:text-base"> DETACHED HOUSE</div>
            <div className="flex items-center gap-x-1 ">
              <div className="h-1  w-1 rounded-full bg-black"></div>
              <div className="text-gray-700 text-sm font-normal lg: lg:text-bas">5Y OLD</div>
            </div>
          </div>
          <div className="font-medium  lg:font-bold lg:text-3xl text-xl"> $ 750,000</div>
          <div className="text-gray-400 text-sm   ">742 Evergreen Terrace</div>
        </div>
        <div className=" w-full md:bg-white border-l   grid grid-cols-1 lg:grid-cols-2  ">
          <div className=" border-0 lg:border-r order-1 md:order-none">
            <div className="pl-4 pb-2 lg:mt-6  lg:border-0  ">
              <div className="text-gray-400 font-medium lg:font-semibold text-sm lg:text-base pb-1 md:pt-4 lg:pt-0    ">
               
                REALTOR
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbPbNtIIuUSO36oIxuR0R4Rk9yPVCmZ0IPT_FGhKYTGFiLc4dHZAFcSvm3Vtc6n0aC-I&usqp=CAU"
                />
                <div>
                  <div className="font-normal text-sm lg:font-medium lg:text-base">Rahul</div>
                  <div className="text-gray-400 font-normal text-xs    lg :font-medium lg:text-bas ">(555) 5555-4321</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white  flex justify-between md:flex-col  gap-1 px-2 mt-1 md:mt-2 lg:pt-8 md:order-1 border-b  md:border-0 md:border-t lg:border-0 py-2 lg:rounded-tr  lg:rounded-br">
              <div className="flex items-center gap-x-1">
                <AiFillBank />
                <h1 className=" text-xs md:text-sm " >3 Bedroooms</h1>
              </div>
              <div className="flex items-center gap-x-1">
                <AiFillBank />
                <h1  className=" text-xs md:text-sm ">2 Bathrooms</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  lg:mt-10 w-[35%] md:w-[60%]  ml-4 lg:ml-0    ">
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
  </div>
  );
};

export default A;
