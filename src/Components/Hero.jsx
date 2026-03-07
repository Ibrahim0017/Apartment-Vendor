import React from "react";
import heroimg from "../assets/3d-electric-car-building.jpg";
const Hero = () => {
  return (
    <>
      <div
        className="relative w-full flex justify-center bg-center bg-cover h-[80vh] items-center"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black/45 h-full"></div>
        <div className="relative text-white text-4xl font-bold max-w-[60%] text-center md:text-6xl">
          Mark Wythe is a Real Estate Broker Working in Portland
        </div>
      </div>
    </>
  );
};

export default Hero;
