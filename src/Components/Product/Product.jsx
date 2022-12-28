import React from "react";
import IconShoppingCard from "../../IconComponents/IconShoppingCart";
import iphone from "../../images/Product/iphone.jpg";
const Product = ({ item }) => {
  const trunscateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const show = () => {
    alert("Hello");
  };
  return (
    <div className="w-[135px] h-[135px] rounded-3xl relative  overflow-hidden">
      <img src={item.image} alt="" className="w-full h-[full] object-cover" />
      <div className="absolute bg-white/90 w-[123px] h-[40px] bottom-2 rounded-[12px] left-[7px] flex p-[5px] flex-col justify-start">
        <p className="text-[8px] text-[#717171] font-[900] w-[90px] h-[20px]">
          {trunscateString(item?.title, 40)}
        </p>
        <p className="text-[10px] font-bold text-[#F2AF21]">{item.price} $</p>
      
          <IconShoppingCard
            className="absolute right-1 h-[26px] w-[26px] top-[7px] cursor-pointer"
          />
        
      </div>
    </div>
  );
};

export default Product;
