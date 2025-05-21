import React from "react";
import aboutimage from "./../../assets/aboutus/AboutUs.png";
export default function AboutAs() {
  return (
    <div className=" bg-Cards-bg mt-[50px] p-10">
      <div className="flex w-full m-auto  items-center justify-around">
        <img className="w-[450px] h-[350px]" src={aboutimage} alt="" />
        <div className="flex flex-col justify-between w-[350px]">
          <h1 className="text-white font-bold text-2xl">About Us</h1>
          <div className="w-[80px] h-[2px] bg-gold-500"></div>
          <p className="text-white opacity-[50%]">
            We are the most reputable online marketplace for buying, selling,
            and storing gold and silver at real-time market values. Purchases
            can be made for as little as $ 50. Additionally, we provide No
            Locking Period SIP in Gold with as little as $ 500 through
            reoccurring payments.
            {<br/>}
             We provide 24 Karat Pure Gold that is 99.9%
            pure along with certifications as our way of assuring you of the
            quality.
          </p>
          <button className="mt-3.5 text-white border-[1px] border-gold-500 rounded-[5px] w-[200px] h-[50px] hover:bg-gold-500 cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
