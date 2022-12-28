import React from "react";
import "./hamburger.css";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Hamburger = () => {
  return (
    <div className="rightheader">
      <div className="right_nav">
        <Avatar className="avtar" />
        {/* <h3>Hello </h3> */}
      </div>
      <div className="nav_btn">
        <p>Promotion</p>
        <p>Gift Card</p>
        {/* <Divider style={{ width: "100%", marginLeft: -20 }} /> */}
        <p>Sell on Bundo</p>
        <p>Track Order</p>
        {/* <Divider style={{ width: "100%", marginLeft: -20 }} /> */}
        <div className="flag">
          <p>
            Login
          </p>
          {/* <img
            src={imgd}
            alt="india flag"
            style={{ width: 35, marginLeft: 10 }}
          /> */}
        </div>

        <p>Sign up</p>
      </div>
    </div>
  );
};

export default Hamburger;
