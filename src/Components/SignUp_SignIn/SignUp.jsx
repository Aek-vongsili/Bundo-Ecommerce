import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignUp = () => {
  const [type, setType] = useState(true);
  const [visible, setVisible] = useState(true);

  const showPassword = () => {
    let password = document.getElementById("pass");
    setVisible(!visible);
    if (visible === true) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  const changeTypeToSignUp = () => {
    setType(!type);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-6">
      {type ? (
        <form
          action=""
          className="w-full flex flex-col py-4 relative"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name=""
            id=""
            className="mb-8 h-9 rounded-3xl border-solid border-[#B8B8B8] pl-4 outline-none placeholder:text-[#BEBEBE]"
            placeholder="Phone Number"
          />
          <button className="absolute w-[110px] h-9 border-none rounded-3xl right-0 bg-[#60DFFF] text-white cursor-pointer hover:bg-[#10bde9]">
            Send Code
          </button>
          <input
            type="text"
            name=""
            id="pass"
            className="mb-2 h-9 rounded-3xl border-solid border-[#B8B8B8] pl-4 outline-none placeholder:text-[#BEBEBE]"
            placeholder="Verification Code"
          />
          <p className="text-[#60DFFF] text-[12px] text-right mb-4 pr-2 cursor-pointer">
            Didn't get the code?
          </p>
          <button className="h-9 rounded-3xl mb-3 border-none bg-[#F2AF21] text-white text-sm cursor-pointer">
            Sign Up
          </button>
          <p
            className="text-[#60DFFF] text-[13px] text-center mb-4 pr-2 cursor-pointer"
            onClick={() => changeTypeToSignUp()}
          >
            Sign Up with Email
          </p>
        </form>
      ) : (
        <form
          action=""
          className="w-full flex flex-col py-4 relative "
          onSubmit={handleSubmit}
        >
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
              className="absolute top-[36%] right-3 text-[#707070] cursor-pointer"
              fontSize="small"
              onClick={() => showPassword()}
            />
          ) : (
            <VisibilityIcon
              className="absolute top-[36%] right-3 text-[#707070] cursor-pointer"
              fontSize="small"
              onClick={() => showPassword()}
            />
          )}
          <p className="text-[#60DFFF] text-[12px] text-right mb-4 pr-2 cursor-pointer">
            Didn't get the code?
          </p>
          <button className="h-9 rounded-3xl mb-3 border-none bg-[#F2AF21] text-white text-sm cursor-pointer">
            Sign Up
          </button>
          <p
            className="text-[#60DFFF] text-[13px] text-center mb-4 pr-2 cursor-pointer"
            onClick={() => changeTypeToSignUp()}
          >
            Sign Up by Phone Number
          </p>
        </form>
      )}
    </div>
  );
};

export default SignUp;
