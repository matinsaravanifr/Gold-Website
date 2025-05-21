import React from "react";

export default function StepsCard({icon,title,text}) {
  return (
    <div className="w-[250px] h-[200px]">
      <div className="w-[90%] flex flex-col m-auto">
        <img className="w-[50px] mt-5" src={icon} alt="icon" />
        <h1 className="font-bold text-white mt-3">{title}</h1>
        <p className="text-white opacity-[50%] mt-5 ">
          {text}
        </p>
      </div>
    </div>
  );
}
