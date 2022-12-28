import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ProductsVer2 from "./ProductsVer2";
import Loading from "../Loader/Loading";
const Row = ({ title, divid, fetchURl }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const result = async () => {
      try {
        const data = await axios.get(fetchURl);
        console.log(data.data);
        setProduct(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    result();
    setLoading(false)
  }, [fetchURl]);

  const slideLeft = () => {
    const slider = document.getElementById(divid);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider = document.getElementById(divid);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="w-full h-full mt-3">
      <Title title={title} />
      <div className="w-full mt-1 flex justify-evenly">
        <div className="w-[830px] h-[265px] relative">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-[#60DFFF] left-[-15px] rounded-full absolute hover:opacity-100 opacity-50 cursor-pointer z-10 group-hover:block top-[45%] text-white"
            size={30}
          />
          <div
            className="w-full h-full grid grid-rows-1 grid-flow-col mt-2 overflow-x-scroll scrollbar-hide scroll-smooth gap-x-5"
            id={divid}
          >
            {product.map((item, id) =>
              loading ? <Loading /> : <ProductsVer2 key={id} item={item} />
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
  );
};

export default Row;
