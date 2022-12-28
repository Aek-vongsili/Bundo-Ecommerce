import React from "react";
import "./Category.css";
import ElectroIcon from "../../images/Group 18.png";
import LipstickIcon from "../../images/Group 16.png";
import SofaIcon from "../../images/Group 22.png";
import HaIcon from "../../images/Group 21.png";
import BallIcon from "../../images/Icon awesome-volleyball-ball.png";
import ShirtIcon from "../../images/Icon map-clothing-store.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-container-s">
        <div className="row">
          <Link to = {`/category/fashion`} className="no-underline">
          <div className="column">
            <img src={ShirtIcon} alt="" />
            <p>Fashion</p>
          </div>
          </Link>
        </div>
        <div className="row">
          <div className="column">
            <img src={ElectroIcon} alt="" />
            <p>Electronic & Accessories</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={HaIcon} alt="" />
            <p>Home Appliances</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={LipstickIcon} alt="" className="icon-lips" />
            <p>Beauty</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={SofaIcon} alt="" className="icon-sofa" />
            <p>Furniture</p>
          </div>
        </div>
        <div className="row" style={{ borderRight: "none" }}>
          <div className="column">
            <img src={BallIcon} alt="" className="icon-ball" />
            <p>Sport</p>
          </div>
        </div>
        <MdChevronRight
          className="bg-[#CBCBCB] right-[-13px] text-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
          size={25}
        />
      </div>
    </div>
  );
};

export default Category;
