import React from "react";
import Cards from "../Components/Cards";
import image1 from "../assets/rs=w_1200,h_600,cg_true.webp";
import image2 from "../assets/rs=w_2480,h_1240,cg_true,m.webp";
import image3 from "../assets/rs=w_2480,h_1240,cg_true.webp";
import image4 from "../assets/qt=q_30.webp";

const ActiveListing = () => {
  return (
    <div className="mt-15 h-full w-full bg-white">
      <div className="flex justify-center gap-6 flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mt-5">Active Listing</h1>
        <div className=" bg-gray-300 w-[50px] h-[1.5px] "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[45%] justify-between">
          <Cards
            cardImage={image1}
            text="ELLIS PROPERTY - Virtual Tour Available"
            description="Brief description of Ellis Property Home "
          />
          <Cards
            cardImage={image2}
            text="BLUFF HOUSE - Virtual Tour Available"
            description="Brief description of the Bluff House "
          />
          <Cards
            cardImage={image3}
            text="AN AMERICAN REFUGE - Virtual Tour Available"
            description="Brief description of American Refuge"
          />
          <Cards
            cardImage={image4}
            text="DOWELL RESIDENCE - Virtual Tour Available"
            description="Brief description of American Refuge"
          />
        </div>

      </div>
    </div>
  );
};

export default ActiveListing;
