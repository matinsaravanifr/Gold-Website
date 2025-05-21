import React from "react";

export default function Cards({ icon, title, text }) {
  return (
    <>
      <div className="w-[370px] h-[200px] bg-Cards-bg">
        <div className="w-[90%] flex flex-col m-auto ">
          <img className="w-[50px] mt-5" src={icon} alt="icon" />
          <h1 className="text-white font-bold mt-2.5">{title}</h1>
          <p className="text-white mt-2.5">{text}</p>
        </div>
      </div>
    </>
  );
}
