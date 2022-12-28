import React from "react";
import banner from "../../images/Group 62.png";
const Banner = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex items-center justify-center">
        <img src={banner} alt="" className="w-[850px] object-cover mb-10"/>
      </div>
    </div>
  );
};

export default Banner;
