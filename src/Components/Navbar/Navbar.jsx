import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/Bundo.png";
import { FiSearch, FiDownload } from "react-icons/fi";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import Hamburger from "./Hamburger";
import Popup from "../Modals/Popup";
import { Link } from "react-router-dom";
import SignIn from "../SignUp_SignIn/SignIn";
import TrackOrderPopup from "../Modals/TrackOrderPopup";
const Navbar = () => {
  const [dropen, setDropen] = useState(false);
  const [hover, setHover] = useState(false);
  const [trackHover, setTrackHover] = useState(false);
  const handelopen = () => {
    setDropen(true);
  };
  const handleClosedr = () => {
    setDropen(false);
  };
  const handleMouseHover = () => {
    setHover(true);
  };
  const hanldeMouseLeave = () => {
    setHover(false);
  };

  const TrackOrderMouseOver = () => {
    setTrackHover(true);
  };
  const TrackOrderMouseLeave = () => {
    setTrackHover(false);
  };
  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelopen}>
            <MenuIcon className="text-white" />
          </IconButton>
          <Drawer open={dropen} onClose={handleClosedr}>
            <Hamburger />
          </Drawer>
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-input">
            <select name="" id="" className="dropdown">
              <option value="">Search in Bundo</option>
            </select>

            <input type="text" placeholder="Search for anything" />
            <button id="btnSearch">
              <FiSearch className="icon" /> Search
            </button>
          </div>
          <div className="link">
            <div className="nav-lang">
              <select name="" id="" className="select_language">
                <option value="">ENG</option>
              </select>
            </div>
            <Link to="/cart">
              <div className="cart-btn">
                <ShoppingCartOutlinedIcon />
              </div>
            </Link>

            <Link to="/account" className="mt-1">
              <AccountCircleSharpIcon className="avatar" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="new_nav">
        <div className="nav_data">
          <div className="left_data">
            <p id="promotion">Promotion</p>
            <p id="giftcard">Gift Card</p>
            <p id="sell">Sell on Bundo</p>
            <p
              id="track"
              onMouseOver={TrackOrderMouseOver}
              onMouseLeave={TrackOrderMouseLeave}
              onClick={() => TrackOrderMouseOver()}
            >
              Track Order
              {trackHover && <TrackOrderPopup />}
            </p>
          </div>
          <div className="right_data">
            <p
              id="download"
              onMouseOver={handleMouseHover}
              onMouseLeave={hanldeMouseLeave}
              onClick={() => handleMouseHover()}
            >
              <FiDownload className="download-icon" />
              Download App
              {hover && <Popup />}
            </p>
            <Link to={"/login"} className="no-underline">
              <p id="login">Login</p>
            </Link>
            <Link to={"/signup"} className="no-underline">
              <p id="signup">Signup</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
