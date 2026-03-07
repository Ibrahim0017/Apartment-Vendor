import React from "react";
import image from "../assets/qt=q_30.webp";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const ThirdSection = () => {
  return (
    <>
      <div className="mt-16 flex justify-center items-center flex-col mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between  w-[75%] ">
          <div className="w-full flex flex-col items-center justify-center gap-6 mt-2 mb-6">
            <div className=" font-s  text-zinc-600">
              <BiSolidQuoteAltRight />
            </div>
            <div className="text-4xl font-extrabold text-zinc-600 text-center md:text-6xl">
              I want to be your next realtor.
            </div>
            <div className=" bg-zinc-300 w-13 h-[1.5px] "></div>
            <div className="text-[13px]">IBNETWORK</div>
          </div>
          <div className="w-full h-full">
            <img className="w-full h-full object-cover" src={image} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
