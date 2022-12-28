import React from "react";

const Address = () => {
  return (
    <div className="h-full w-full rounded-[18px] bg-[#F8F8F8] py-10 px-5">
      <div className="flex text-[#717171] justify-evenly">
        <h5 className="w-full border-solid border-x-0 border-t-0 text-left pb-2 border-[#DBDBDB]">
          Address Name
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          Address
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          District
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          Province
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          Phone Number
        </h5>
      </div>
      <div className="flex justify-around text-[11px] font-bold text-[#717171] relative">
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          Aek Vongsili
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          08/100, Phaxay
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          Sisattanak
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          Vientiane Capital
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          +85620 **** ****
        </p>
        <button className="border-none absolute right-0 top-[20px] bg-inherit text-[#60DFFF] cursor-pointer text-[12px] font-bold">
          EDIT
        </button>
      </div>
      <button className="text-center mt-[150px] w-full h-8 text-white border-none bg-[#F2AF21] rounded-[32px] text-[13px] cursor-pointer hover:bg-[#dd9a09]">
        Add Address
      </button>
    </div>
  );
};

export default Address;
