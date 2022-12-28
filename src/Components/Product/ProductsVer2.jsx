import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import IconFreeDelivery from "../../IconComponents/IconFreeDelivery";
import IconSale from "../../IconComponents/IconSale";
import IconShoppingCard from "../../IconComponents/IconShoppingCart";

const ProductsVer2 = ({ item }) => {
  const colors = {
    gold: "#FFD700",
    grey: "#a9a9a9",
  };
  const [like, setLike] = useState(false);
  const star = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const trunscateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const showItem = (e) => {
    alert(e);
  };
  const Like = () => {
    setLike(!like);
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const hanldeMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div className="w-[170px] h-[250px] rounded-2xl relative  overflow-hidden bg-white flex flex-col items-center">
      <div className="w-[150px] h-[150px] flex  mt-[6px] rounded-[11px] overflow-hidden relative">
        <div className="absolute top-1 flex justify-evenly">
          <IconSale className="w-[32px] mr-1" />
          <IconFreeDelivery className="w-[30px]" />
        </div>
        <div onClick={() => Like()} key={item.id}>
          {like ? (
            <FaHeart className="absolute top-1 right-0 text-[#EE4178] text-2xl cursor-pointer" />
          ) : (
            <FaRegHeart className="absolute top-1 right-0 text-[#EE4178] text-2xl cursor-pointer" />
          )}
        </div>
        <img
          src={item?.image}
          alt=""
          className="h-full w-full object-scale-down"
        />
      </div>
      <div className="p-3 w-full relative">
        <p className="text-[#717171] text-[10px] font-bold h-[20px]">
          {trunscateString(item?.title, 50)}
        </p>
        <p className="text-[14px] font-bold text-[#F2AF21] mt-[10px]">
          ${item?.price}
        </p>
        <p onClick={() => showItem(item?.id)}>
          <IconShoppingCard className="absolute right-2 h-[35px] w-[35px] bottom-[-10px] cursor-pointer" />
        </p>
        <p className="absolute mt-1">
          {star.map((_, index) => (
            <FaStar
              className="cursor-pointer mr-[1px] text-[#60DFFF]"
              size={17}
              onClick={() => handleClick(index + 1)}
              color={
                (hoverValue || currentValue) > index ? colors.gold : colors.grey
              }
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={hanldeMouseLeave}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProductsVer2;
