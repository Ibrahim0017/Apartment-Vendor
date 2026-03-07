import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="w-16 h-[2px] bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="About"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Biography
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I was born into a real estate family. My grandfather, Butherus
              Wythe, bought and sold property along the entire eastern
              seaboard. My father, Howard Wythe, bought, sold and developed
              commercial real estate properties in New Orleans and Baton
              Rouge for his entire adult life.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Drawing inspiration from their careers, I was destined to make
              my own way in real estate. When I got my realtor’s license as a
              young man, I saw it not only as a way to make a living but as a
              charter to match people and families with their perfect
              properties.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              It’s a commitment I rededicate myself to every day, and it’s my
              commitment to this ideal that gives me the confidence to say:
              I want to be your next realtor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;