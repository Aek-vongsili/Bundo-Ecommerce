import React, { useEffect, useState } from "react";
import Main from "../Components/Main/Main";
import Product from "../Components/Product/Product";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Row from "../Components/Product/Row";
import Banner from "../Components/Main/Banner";
import CategorySelected from "./CategorySelected";
import FeatureProduct from "../Components/Product/FeatureProduct";
const Home = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <Main />
      <FeatureProduct />
      {/* <CategorySelected title={"Fashion"} /> */}
      <Banner />
    </div>
  );
};

export default Home;
