import React from "react";
import img from "./../../assets/Comments/noprofile-01 1.png";
export default function CommentCard({name,date, comment}) {
  return (
    <>
      <div className="w-[300px] h-[300px] bg-Cards-bg">
        <div className="w-[90%] h-full m-auto mt-5 flex flex-col">
          <div className="flex items-center">
            <img className="w-[60px] mt-5" src={img} alt="icon" />
            <span className="flex flex-col ml-5 mt-4.5 ">
              <h1 className="font-bold text-white text-2xl">{name}</h1>
              <h3 className="text-white opacity-[50%]">{date}</h3>
            </span>
          </div>
          <p className="text-white opacity-[50%] mt-10">
            {comment}
          </p>
        </div>
      </div>
    </>
  );
}
