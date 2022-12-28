import { Checkbox } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React, { useState } from "react";
import ip from "../../images/Product/iphone.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
const CartProduct = () => {
  let [count, setCount] = useState(1);
  const Increase = () => {
    setCount((count) => count + 1);
  };
  const Decrease = () => {
    if (count >= 1) {
      setCount((count) => count - 1);
    }
  };
  return (
    <span className="flex items-center justify-between text-[10px] pr-[18px] font-bold text-[#717171] mt-3 border-solid border-x-0 border-t-0 border-b-[1px] border-[#717171]">
      <div className="flex ml-[-1px]">
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 20 },
            "&.Mui-checked": { color: lightBlue[300] },
          }}
        />
        <img src={ip} alt="" className="w-[80px] object-cover" />
      </div>

      <div className="">
        <p>Iphone 12</p>
        <p className="text-[8px]">Color : Red</p>
      </div>
      <p className="ml-5">12.000.000 LAK</p>
      <div className="flex flex-row items-center ml-3">
        <button
          className="w-5 h-5 rounded-full border-none bg-[#ECECEC] text-center text-[#9B9B9B] text-[18px] flex items-center justify-center font-bold pb-1 mr-2 cursor-pointer"
          onClick={Decrease}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="w-5 h-5 rounded-full border-none bg-[#ECECEC] text-center text-[#9B9B9B] text-[12px] flex items-center justify-center font-bold pb-[2px] ml-2  cursor-pointer"
          onClick={Increase}
        >
          +
        </button>
      </div>
      <p className="ml-3">12.000.000 LAK</p>
      <DeleteIcon
        color="inherit #717171"
        className="text-[#717171] cursor-pointer"
      />
    </span>
  );
};

export default CartProduct;
