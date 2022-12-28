import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Main/Banner";
import Checkbox from "@mui/material/Checkbox";
import { lightBlue } from "@mui/material/colors";
import RoomIcon from "@mui/icons-material/Room";
import Dropdown from "../Dropdown/Dropdown";
import { FaMoneyBill } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Mixay from "../../images/LogisticLogo/116107003_1116360392097922_2433888328140089764_n.png";
import Hal from "../../images/LogisticLogo/124461334_686979668916526_1554019903651568901_n.png";
import Flash from "../../images/LogisticLogo/239675280_129284052747960_4810500084532609958_n.png";
import Ans from "../../images/LogisticLogo/52809918_829400694074367_1594316599286824960_n.png";
import CartProduct from "./CartProduct";


const Cart = () => {
  const address = [
    {
      value: "Dongdok, Xaythany, Vientiane Capital",
      label: "Dongdok, Xaythany, Vientiane Capital",
    },
    {
      value: "Phaxai, Sisatanak, Vientiane Capital",
      label: "Phaxai, Sisatanak, Vientiane Capital",
    },
    {
      value: "Dongdoki, Xaythany, Vientiane Capital",
      label: "Dongdoki, Xaythany, Vientiane Capital",
    },
  ];
  const delivery = [
    {
      value: "Hal",
      label: `HAL Logistic`,
      img: <img src={Hal} alt="" className="w-5 mx-4" />,
    },
    {
      value: "Ans",
      label: "ANS Express",
      img: <img src={Ans} alt="" className="w-5 mx-4" />,
    },
    {
      value: "Mx",
      label: "Meexay Express",
      img: <img src={Mixay} alt="" className="w-5 mx-4" />,
    },
    {
      value: "Flash",
      label: "Flash Express",
      img: <img src={Flash} alt="" className="w-5 mx-4" />,
    },
  ];
  return (
    <div className="w-full h-full mt-[113px] relative">
      <div className="w-full h-12 bg-[#F8F8F8] flex items-center justify-center">
        <div className="w-[840px] flex font-bold">
          <Link to="/" className="no-underline">
            <p className="text-[14px] text-[#717171]">{"Home > "}</p>
          </Link>
          <p className="ml-2 text-[#60DFFF]">Checkout</p>
        </div>
      </div>

      <div className="mt-8 w-full flex items-center justify-evenly">
        <div className="w-[900px] h-[500px] px-5 flex">
          <div className="w-[750px]">
            <p className="font-[Lato-italic] text-[50px] font-bold text-[#F2AF21] ml-1">
              Cart
            </p>
            <div className="bg-[#F8F8F8] h-[50px] rounded-2xl flex items-center justify-around text-[12px] font-bold pr-[50px] text-[#717171] mt-5">
              <p className="flex items-center ml-[-30px]">
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                    "&.Mui-checked": { color: lightBlue[300] },
                  }}
                />
                Select All
              </p>
              <p>Product</p>
              <p>Unit Price</p>
              <p>Quantity</p>
              <p>Total Price</p>
            </div>
            <CartProduct/>
            <CartProduct/>
          </div>
          <div className="w-[300px] h-[370px] mt-[9.5%] bg-[#F8F8F8] rounded-2xl ml-3 px-5 py-4">
            <div>
              <p className="text-[#717171] font-bold text-[11px]">
                Select Shipping Address
              </p>
              {/* <select
                name=""
                id=""
                className="w-full h-8 mt-2 rounded-[10px] border-solid border-[#ECECEC] text-[#9B9B9B]  outline-none text-[11px]"
              >
                <option
                  className="text-[10px]"
                  dataContent="<i class='fa fa-address-book-o' aria-hidden='true'></i>Option1"
                >
                  Phaxai, Sisatanak, Vientiane Capital
                </option>
              </select> */}
              <Dropdown
                options={address}
                icon={
                  <RoomIcon
                    fontSize="inherit 20px"
                    className=" text-[20px] text-center text-[#9B9B9B]"
                  />
                }
              />
              <p className="text-[#717171] font-bold text-[11px] mt-4">
                Select Delivery Services
              </p>
              <Dropdown
                options={delivery}
                icon={
                  <TbTruckDelivery size={20} color="#9B9B9B" className="ml-1" />
                }
                img={delivery.img}
              />
              <p className="text-[#717171] font-bold text-[11px] mt-4">
                Select Payment Method
              </p>
              <Dropdown
                options={address}
                icon={
                  <FaMoneyBill size={20} color="#9B9B9B" className="mx-1" />
                }
              />
            </div>
            <div className="flex justify-between">
              <div className="mt-5 text-[#717171]">
                <p className="text-[12px]">Sub Total:</p>
                <p className="text-[12px] mt-3">Shipping Fee:</p>
                <h4 className="mt-3">Total:</h4>
              </div>
              <div className="mt-5 text-[#717171] text-right">
                <p className="text-[12px]">60,000 LAK</p>
                <p className="text-[12px] mt-3">0 LAK</p>
                <h4 className="text-[#F2AF21] mt-3">60,000 LAK</h4>
              </div>
            </div>
            <button className="w-full mt-4 h-8 text-white border-none bg-[#F2AF21] rounded-3xl hover:bg-[#cf9312] cursor-pointer">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Cart;
