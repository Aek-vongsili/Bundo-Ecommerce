import React from "react";

const Title = (props) => {
  return (
    <div className="w-full relative flex justify-evenly ">
      <div className="w-[830px]  flex justify-between border-solid border-b-[3px] border-t-0 border-r-0 border-l-0 border-gray-200">
        <p className="text-lg text-[#717171] font-[600] lg:text-sm ">
          {props.title}
        </p>
        <button className="border-none cursor-pointer bg-inherit font-[Lato] font-[600] text-[#60DFFF] text-sm lg:text-[12px]">
          SEE ALL {">"}
        </button>
      </div>
    </div>
  );
};

export default Title;
