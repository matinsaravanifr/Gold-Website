import React from "react";
import goldimage1 from "./../../assets/Wellcome_Section/Rectangle 4.png";
import goldimage2 from "./../../assets/Wellcome_Section/Rectangle 5.png";
import goldimage3 from "./../../assets/Wellcome_Section/Rectangle 6.png";
import goldimage4 from "./../../assets/Wellcome_Section/Rectangle 7.png";

export default function WellcomeSection() {
  return (
    <div className="w-[85%] m-auto mt-5 h-[500px] flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="w-[400px] text-white font-bold text-3xl  ">
          Get access to the most secure method of buying and selling gold.
        </h1>
        <div className="w-[150px] bg-gold-500 h-[8px] mt-2.5"></div>
        <p className="w-[450px] mt-[30px] text-white">
          In order to get the most out of your money, we at Gold Inc. strive to
          make your experience with gold straightforward, transparent, and
          reliable.
        </p>
        <div className="mt-10 w-[500px] flex justify-between">
          <button className="w-[238px] h-[84px] text-white border-[1px] border-gold-500 hover:bg-gold-500 cursor-pointer rounded-[5px] font-bold">
            Learn More
          </button>
          <button className="w-[238px] h-[84px] text-white border-[1px] border-gold-500 hover:bg-gold-500 cursor-pointer rounded-[5px] font-bold">
            Sell Your Gold
          </button>
        </div>
      </div>
      <div className="relative w-[450px] h-[350px] ">
        <img
          className="absolute top-[-80px] left-[100px] w-[250px] z-40 rounded-xl shadow-xl"
          src={goldimage4}
          alt="image"
        />
        <img
          className="absolute top-[50px] left-0 w-[250px] z-30 rounded-xl shadow-xl"
          src={goldimage1}
          alt="image"
        />
        <img
          className="absolute top-[120px] left-[120px] w-[250px] z-50 rounded-xl shadow-xl"
          src={goldimage2}
          alt="image"
        />
        <img
          className="absolute top-[180px] left-[240px] w-[250px] z-50 rounded-xl shadow-xl"
          src={goldimage3}
          alt="image"
        />
      </div>
    </div>
  );
}
