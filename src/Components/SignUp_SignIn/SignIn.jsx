import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
const SignIn = ({ page }) => {
  const [visible, setVisible] = useState(true);
  const [loginOrsignup, setLoginOrSignup] = useState(true);

  const showPassword = () => {
    let password = document.getElementById("pass");
    setVisible(!visible);
    if (visible === true) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  const changePage = (e) => {
    setLoginOrSignup(e);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] h-[450px] mt-[50px] flex flex-col">
        <div className=" w-full flex justify-center mt-[80px] mb-2">
          <Link to={"/login"} className="no-underline text-[#717171]">
            <h2
              className="mr-[80px] cursor-pointer"
              onClick={() => changePage(true)}
            >
              Login
            </h2>
          </Link>
          <Link to={"/signup"} className="no-underline text-[#717171]">
            <h2 className="cursor-pointer" onClick={() => changePage(false)}>
              Sign Up
            </h2>
          </Link>
        </div>
        {loginOrsignup && page ? (
          <div className="mt-6">
            <form action="" className="w-full flex flex-col py-4 relative">
              <input
                type="text"
                name=""
                id=""
                className="mb-8 h-9 rounded-3xl border-solid border-[#B8B8B8] pl-4 outline-none placeholder:text-[#BEBEBE]"
                placeholder="Username / Email / Phone Number"
              />
              <input
                type="password"
                name=""
                id="pass"
                className="mb-2 h-9 rounded-3xl border-solid border-[#B8B8B8] pl-4 outline-none placeholder:text-[#BEBEBE]"
                placeholder="Password"
              />
              {visible ? (
                <VisibilityOffIcon
                  className="absolute top-[30%] right-3 text-[#707070] cursor-pointer"
                  fontSize="small"
                  onClick={() => showPassword()}
                />
              ) : (
                <VisibilityIcon
                  className="absolute top-[30%] right-3 text-[#707070] cursor-pointer"
                  fontSize="small"
                  onClick={() => showPassword()}
                />
              )}
              <p className="text-[#60DFFF] text-[12px] text-right mb-4 pr-2 cursor-pointer">
                Forgot Password
              </p>
              <button className="h-9 rounded-3xl mb-3 border-none bg-[#F2AF21] text-white text-sm cursor-pointer hover:bg-[#d89402]">
                Login
              </button>
              <button className="h-9 rounded-3xl mb-3 border-none bg-[#226FE3] text-white text-sm cursor-pointer hover:bg-[#4267B2]">
                Login with Facebook
              </button>
              <button className="h-9 rounded-3xl border-none bg-[#E43A3A] text-white text-sm cursor-pointer hover:bg-[#e21d1d]">
                Login with Google
              </button>
            </form>
          </div>
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
};

export default SignIn;
