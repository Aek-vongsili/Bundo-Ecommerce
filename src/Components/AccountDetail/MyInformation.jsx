import React from "react";
import ip from "../../images/Product/iphone.jpg";
const MyInformation = () => {
  return (
    <div className="h-full w-full rounded-[18px] bg-[#F8F8F8] px-10">
      <div className="flex justify-around pt-10">
        <div className="font-bold text-[#717171] text-[13px] mr-10">
          <p>User Name</p>
          <p className="mt-5">Email</p>
          <p className="mt-5">Phone Number</p>
          <p className="mt-5">Gender</p>
          <p className="mt-5">Birth Date</p>
        </div>
        <div className="font-bold text-[#717171] text-[13px] mr-10">
          <p>Aek Vongsili</p>
          <p className="mt-5">*******@mail.com</p>
          <p className="mt-5">+856 20 **** **** </p>
          <p className="mt-5">Male</p>
          <p className="mt-5">25/1/2002</p>
        </div>
        <div>
          <img src={ip} alt="" className="rounded-full w-[110px]" />
          <p className="text-center text-[12px] text-[#60DFFF] cursor-pointer font-bold mt-2">
            CHANGE PHOTO
          </p>
        </div>
      </div>
      <button className="text-center mt-[60px] w-full h-8 text-white border-none bg-[#F2AF21] rounded-[32px] text-[13px] cursor-pointer hover:bg-[#dd9a09]">
        Edit Profile
      </button>
    </div>
  );
};

export default MyInformation;
