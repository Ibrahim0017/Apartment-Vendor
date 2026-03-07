import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      <div className="w-full max-w-3xl bg-white shadow-lg">

        {/* Blue Header */}
        <div className="bg-blue-600 text-white text-center py-3 font-semibold">
          Reviews on Zillow
        </div>

        {/* Rating Section */}
        <div className="text-center py-8 border-b">
          <p className="text-gray-700 font-medium mb-2">Average Rating</p>

          <div className="flex justify-center gap-1 text-gray-300 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        {/* Message */}
        <div className="text-center py-10 border-b text-gray-600">
          Reviews coming soon!
        </div>

        {/* Zillow Logo */}
        <div className="text-center py-6">
          <p className="text-xs text-gray-500 mb-2">PROVIDED BY</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Zillow_Logo.svg"
            alt="Zillow"
            className="mx-auto h-10"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center text-xs text-gray-500 pb-6 px-4">
          © Zillow, Inc., 2006–2016. Use is subject to{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Use</span>.{" "}
          <span className="text-blue-600 cursor-pointer">
            What's a Zestimate?
          </span>
        </div>
      </div>
    </section>
  );
};

export default Rating;