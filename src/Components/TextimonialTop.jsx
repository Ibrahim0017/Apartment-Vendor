import React from "react";
import image from "../assets/rs=w_2480,h_1240,cg_true,m.webp";
const TextimonialTop = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-full flex flex-col justify-center items-center text-start ">
        <div className="flex justify-center flex-col items-center w-[75%] max-w-md gap-14">
          <h1 className="w-full text-[45px] font-bold text-black/80 leading-11 text-center lg:text-left ">
            What my clients have to say
          </h1>
          <div className="w-full flex justify-center lg:justify-start">
            <div className=" bg-black/40 w-[60px] h-[2px] "></div>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-medium">Bradley</h2>
              <h2 className="font-medium text-black/50 leading-5">
                "Finding the right home to raise my family felt like a
                challenge. Mark made that happen with ease!"
              </h2>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Alex</h2>
              <h2 className="font-medium text-black/50 leading-5">
                "Home is not just a state of mind. It's a process, and Mark led
                the way."
              </h2>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Celia</h2>
              <h2 className="font-medium text-black/50 leading-5">
                "Born and raised an urbanite, I was pretty picky. Mark was
                perfect."
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lg:block">
        <img className="object-cover h-full w-full " src={image} alt="" />
      </div>
    </div>
  );
};

export default TextimonialTop;
