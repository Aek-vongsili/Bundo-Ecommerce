import Title from "../Title/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Row from "./Row";
import Mobile from "../../images/Product/xiaomi_mi_mix_4__5__thumb800.png";
import Product from "./Product";
import Loading from "../Loader/Loading";

const FeatureProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const result = async () => {
    try {
      const data = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    result();
    setLoading(false);
  }, []);
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  return (
    <div className="pt-10">
      <div className="w-full h-full ">
        <Title title={"Featured Products"} />
        <div className="w-full mt-1 flex justify-evenly">
          <div className="w-[850px] h-[350px] flex justify-evenly items-center">
            <div className="w-[300px] h-[300px] relative ">
              <p className="absolute top-4 font-[Lato-italic] text-[16px] text-[#60DFFF] right-5">
                Featured Phone
              </p>
              <p className="absolute w-[120px] text-[#FFFFFF] top-[5rem] italic text-right right-6 font-[900] text-[30px]">
                Xiaomi MI MIX4
              </p>
              <div className="h-[90px] w-[90px] absolute rounded-full bottom-8 right-9 bg-[#F2AF21] border-solid border-[1px] border-[#707070]">
                <p className="text-white italic font-bold text-[27px] mt-[10px] mr-[4px] text-center">
                  15% OFF
                </p>
              </div>
              <img src={Mobile} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[520px] h-[300px]  relative group pt-1 pl-1">
              <MdChevronLeft
                onClick={slideLeft}
                className="bg-[#60DFFF] left-0 rounded-full hidden absolute hover:opacity-100 opacity-50 cursor-pointer z-10 group-hover:block top-[45%] text-white"
                size={30}
              />
              <div
                className="h-full w-full  overflow-x-scroll scroll-smooth scrollbar-hide relative grid grid-rows-2 grid-flow-col gap-x-6 gap-y-7"
                id={"slider"}
              >
                {product.map((item, id) =>
                  loading ? <Loading /> : <Product key={id} item={item} />
                )}
              </div>
              <MdChevronRight
                onClick={slideRight}
                className="bg-[#60DFFF] right-[-20px] rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block top-[45%] text-white"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <Row
        title={"On Sale Products"}
        divid={"row1"}
        fetchURl="https://fakestoreapi.com/products/category/jewelery"
      />
      <Row
        title={"Popular Products"}
        divid={"row2"}
        fetchURl="https://fakestoreapi.com/products/category/electronics"
      />
      <Row
        title={"Just for You"}
        divid={"row3"}
        fetchURl="https://fakestoreapi.com/products/category/men's clothing"
      />
      <div className="w-full h-[35px] flex justify-center items-center mt-6">
        <button className="w-[220px] h-[30px] rounded-[20px] text-[#60DFFF] bg-inherit outline-0 text-sm cursor-pointer border-[#60DFFF] border-solid ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FeatureProduct;
