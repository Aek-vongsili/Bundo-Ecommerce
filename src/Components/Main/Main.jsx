import React from "react";

import homeImg from "../../images/61TD5JLGhIL._SX3000_.png";
import Category from "../Category/Category";
import Carousel from "react-material-ui-carousel";
const Main = () => {
  return (
    <div className="w-full h-[auto] mt-[113px] lg:mt-[80px]">
      <div className="w-full h-full relative">
        <div className="absolute w-full h-[60%] bg-gradient-to-t from-white bottom-0"></div>
        <img src={homeImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute w-full  p-9 lg:p-3 top-0">
          <h3 className="text-5xl lg:text-4xl font-bold text-[#F2AF21] font-[Lato-bold] pl-[17%]">
            Get Special Offer
          </h3>
          <p className="text-2xl lg:text-lg text-[#F2AF21] font-[Lato-italic] pl-[17.2%]">
            for Electronic Devices
          </p>
          <button className="h-11 w-[115px] rounded-[33px] text-[16px] pb-[3px] text-white bg-[#F2AF21] font-[Lato] cursor-pointer border-none ml-[23%] mt-[20px] lg:h-7 lg:w-[70px] lg:text-[9px] lg:ml-[25%] lg:mt-[10px]">
            Shop Now
          </button>
        </div>
        <Category />
      </div>
    </div>
  );
};

export default Main;
