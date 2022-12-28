import React from "react";
import GooglePlay from "../../images/GooglePlay.png";
import Itune from "../../images/DownloadOnAppStore.png";
import Qr from "../../images/QrCode.png";
const Popup = () => {
  return (
    <div className="absolute box-border z-auto h-[200px] w-[300px] bg-white flex items-center justify-center rounded-xl shadow-3xl flex-col left-[30%] top-[105%]">
      <div>
        <h4 className="text-[#717171] italic text-[14px]">
          Shop everywhere with BUNDO App
        </h4>
        <h4 className="text-[#F2AF21] font-bold mt-2">Download Now!</h4>
      </div>
      <div>
        <span className="flex items-cente justify-center my-2">
          <img src={Qr} alt="" className="w-[60px]" />
        </span>
        <div>
          <img
            src={GooglePlay}
            alt=""
            className="w-[60px] mr-1 cursor-pointer"
          />
          <img src={Itune} alt="" className="w-[54px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
