import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/Main/Banner";
import Main from "../Components/Main/Main";

const CategorySelected = ({ title }) => {
  return (
    <>
    <Main/>
      <div className="w-full h-full mt-5 relative">
        <div className="w-full h-[45px] bg-[#F8F8F8] flex items-center justify-start">
          <p className="font-[Lato] text-[#717171] text-sm ml-[20%]">{`Home> ${title}`}</p>
        </div>
      </div>
      <Banner/>
    </>
  );
};

export default CategorySelected;
