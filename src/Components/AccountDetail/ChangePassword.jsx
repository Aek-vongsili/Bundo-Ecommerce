import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ChangePassword = () => {
  const [visible, setVisible] = useState(true);
  const showPassword = (id) => {
    let password = document.getElementById(id);
    setVisible(!visible);
    if (visible === true) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  const Password = [
    {
      id: 1,
      type: "password",
      className:
        "w-full h-8 rounded-[32px] border-solid border-[#B8B8B8] pl-4 outline-none placeholder:font-bold",
      placeholder: "Current Password",
    },
    {
      id: 2,
      type: "password",
      className:
        "w-full h-8 mt-10 rounded-[32px] border-solid border-[#B8B8B8] pl-4 outline-none placeholder:font-bold",
      placeholder: "New Password",
    },
    {
      id: 3,
      type: "password",
      className:
        "w-full h-8 mt-10 rounded-[32px] border-solid border-[#B8B8B8] pl-4 outline-none placeholder:font-bold",
      placeholder: "Retype Your New Password",
    },
  ];
  return (
    <div className="h-full w-full rounded-[18px] bg-[#F8F8F8] py-10 px-5">
      <div className="flex flex-col relative">
        {Password.map((i, index) => (
          <input
            className={i.className}
            placeholder={i.placeholder}
            key={i.id}
            type={i.type}
          />
        ))}
        <button className="text-center mt-10 w-full h-8 text-white border-none bg-[#F2AF21] rounded-[32px] text-[13px] cursor-pointer hover:bg-[#dd9a09]">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
