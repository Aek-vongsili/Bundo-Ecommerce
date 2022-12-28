import React from "react";
import mastercard from "../../images/PaymentCard/mastercard.png";
const Payment = () => {
  return (
    <div className="h-full w-full rounded-[18px] bg-[#F8F8F8] py-10 px-5">
      <div className="flex text-[#717171] justify-evenly">
        <h5 className="w-full border-solid border-x-0 border-t-0 text-left pb-2 border-[#DBDBDB]">
          My Payment Method
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          Card / Account Number
        </h5>
        <h5 className="w-full border-solid text-left border-x-0 border-t-0 pb-2 border-[#DBDBDB]">
          Expiration Date
        </h5>
      </div>
      <div className="flex justify-around text-[12px] font-bold text-[#717171] relative">
        <p className="w-full border-solid border-x-0 border-t-0 text-left pb-5 mt-5 border-[#DBDBDB]">
          <img src={mastercard} alt="" className="h-7 ml-9" />
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pt-2 mt-5 border-[#DBDBDB] pl-8">
          5960 **** **** 5642
        </p>
        <p className="w-full border-solid border-x-0 border-t-0 text-left pt-2 mt-5 border-[#DBDBDB] pl-10">
          05/22
        </p>
        <button className="border-none absolute right-2 top-[27px] bg-inherit text-[#60DFFF] cursor-pointer text-[12px] font-bold">
          DELETE
        </button>
      </div>
      <button className="text-center mt-[200px] w-full h-8 text-white border-none bg-[#F2AF21] rounded-[32px] text-[13px] cursor-pointer hover:bg-[#dd9a09]">
        Add Payment Option
      </button>
    </div>
  );
};

export default Payment;
