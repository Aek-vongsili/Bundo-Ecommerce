import React from "react";
import logo from "../../images/Bundo.png";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import GooglePlay from "../../images/GooglePlay.png";
import Itune from "../../images/DownloadOnAppStore.png";
import Qr from "../../images/QrCode.png";
import Mixay from "../../images/LogisticLogo/116107003_1116360392097922_2433888328140089764_n.png";
import Hal from "../../images/LogisticLogo/124461334_686979668916526_1554019903651568901_n.png";
import Flash from "../../images/LogisticLogo/239675280_129284052747960_4810500084532609958_n.png";
import Ans from "../../images/LogisticLogo/52809918_829400694074367_1594316599286824960_n.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        {/* <div className="absolute left-[10%] top-[13%] border-solid w-full z-50">
          <img src={logo} alt="" className="scale-90 object-cover" />
        </div> */}
        <div>
          <h3>Help Center</h3>
          <p>Orders</p>
          <p>Payments</p>
          <p>Returns & Refunds</p>
          <p>Delivery</p>
          <p>Track Orders</p>
        </div>
        <div>
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Sell on Bundo</p>
          <p>Contact Us</p>
        </div>
        <div>
          <div>
            <h3>Payment Method</h3>
          </div>
          <div>
            <h3>Delivery Services</h3>
            <div className="mt-[10px]">
              <img src={Hal} alt="" className="mr-1 w-8"/>
              <img src={Ans} alt="" className="mr-1 w-8"/>
              <img src={Mixay} alt="" className="mr-1 w-8"/>
              <img src={Flash} alt="" className="w-8"/>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center">Download The App</h3>
          <span className="flex items-cente justify-center my-4">
            <img src={Qr} alt="" className="w-[80px]" />
          </span>
          <div>
            <img
              src={GooglePlay}
              alt=""
              className="w-[80px] mr-1 cursor-pointer"
            />
            <img src={Itune} alt="" className="w-[70px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] flex justify-evenly items-center h-[50px] relative">
        <div className="mr-[330px]">
          <p className="text-[#717171] text-[15px] font-bold">
            Copyright 2022 All Rights Reserved
          </p>
        </div>
        <div></div>
        <div className="mr-[80px] relative">
          <p className="text-[#717171] text-[15px] font-bold">
            Follow us
            <BsFacebook className="absolute top-0 ml-[5px] text-[20px]" />
            <BsInstagram className="absolute top-0 ml-[5px] text-[20px] right-[-50px]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
