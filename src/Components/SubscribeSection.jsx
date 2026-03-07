import React from "react";
import { FaFacebookF, FaYelp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SubscribeSection = () => {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-3">Subscribe</h2>
          <p className="text-gray-600">
            Sign up to hear about my new listings.
          </p>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[500px] border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
          />

          <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition cursor-pointer">
            SIGN UP
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 mb-20">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
            <FaFacebookF />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white
          cursor-pointer">
            <FaXTwitter />
          </div>

          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white
          cursor-pointer">
            <FaYelp />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;