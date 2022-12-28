import React, { useState } from "react";
import ip from "../../images/Product/iphone.jpg";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { FaClipboardList, FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import MyInformation from "./MyInformation";
import Address from "./Address";
import Payment from "./Payment";
import ChangePassword from "./ChangePassword";
const Account = () => {
  const [page, setPage] = useState("myinformation");
  return (
    <div className="w-full h-screen mt-[113px] flex items-center justify-evenly">
      <div className="w-[900px] h-[500px] p-1 flex mb-8">
        <div className="w-[230px] rounded-[18px] bg-[#F8F8F8] px-2">
          <div className="h-[60px] my-5 flex items-center flex-row justify-center">
            <img
              src={ip}
              alt=""
              className="w-[50px] rounded-full object-cover"
            />
            <h5 className="ml-2 text-[#717171]">Jelayu vongsili</h5>
          </div>
          <div className="h-[380px] p-3">
            <p className="flex items-center text-[12px] text-[#717171] font-bold cursor-pointer">
              <AccountCircleSharpIcon
                fontSize="inherit 25px"
                className="text-[25px] mr-2"
              />
              My Account
            </p>
            <p className="flex items-center text-[12px] text-[#717171] font-bold mt-4 cursor-pointer">
              <FaClipboardList className="text-[25px] mr-2 text-[#F2AF21] mb-1" />
              My Orders
            </p>
            <p className="flex items-center text-[12px] text-[#717171] font-bold mt-4 ml-[3px] cursor-pointer">
              <FaHeart className="text-[20px] mr-[10px] text-[#EE4178]" />
              My Wish List
            </p>
            <p className="flex items-center text-[12px] text-[#717171] font-bold mt-4 cursor-pointer">
              <HiPlus className="text-[25px] mr-2 text-[#EE4178]" />
              Followed Store
            </p>
          </div>
        </div>
        <div className="w-full ml-3 flex flex-col">
          <div className="w-full h-10 text-[#9B9B9B] flex justify-around items-center pb-2 border-[#9B9B9B]">
            <h4
              className="cursor-pointer border-solid w-full text-left h-full pb-2 border-x-0 border-t-0 hover:text-[#60DFFF]"
              onClick={() => setPage("myinformation")}
            >
              My Information
            </h4>
            <h4
              className="cursor-pointer border-solid w-full text-center h-full pb-2 border-x-0 border-t-0 hover:text-[#60DFFF]"
              onClick={() => setPage("address")}
            >
              Address
            </h4>
            <h4
              className="cursor-pointer border-solid w-full text-center h-full pb-2 border-x-0 border-t-0 hover:text-[#60DFFF]"
              onClick={() => setPage("payment")}
            >
              Payment
            </h4>
            <h4
              className="cursor-pointer border-solid w-full text-right h-full pb-2 border-x-0 border-t-0 hover:text-[#60DFFF]"
              onClick={() => setPage("changepassword")}
            >
              Change Password
            </h4>
          </div>
          {page === "myinformation" && <MyInformation />}
          {page === "address" && <Address />}
          {page === "payment" && <Payment />}
          {page === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Account;
