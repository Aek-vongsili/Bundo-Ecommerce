import React from "react";

const TrackOrderPopup = () => {
  return (
    <div className="absolute box-border z-auto h-[230px] w-[280px] bg-white flex items-center justify-center rounded-xl shadow-3xl flex-col left-[-10] top-[105%]">
      <div className="mb-5">
        <h2 className="text-[#F2AF21] italic">Track Order </h2>
        <h4 className="text-[#717171] mt-2 italic">
          Please enter your order number!
        </h4>
      </div>
      <div className="flex flex-col w-[250px] mt-2">
        <input
          type="text"
          placeholder="Order number"
          className="pl-2 h-7 border-solid border-[#B8B8B8] rounded-3xl placeholder:text-[11px] outline-none "
        />
        <button className="bg-[#F2AF21] border-none mt-3 text-white h-7 rounded-3xl text-[11px] cursor-pointer hover:bg-[#d69404]">
          Track Order
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default TrackOrderPopup;
