import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-gold-500 h-[300px] mt-5 flex justify-start items-center ">
        <div className="w-[300px] ml-[50px]">
            <h1 className="font-bold text-2xl text-white">Contact us</h1>
            <p className="text-white">newyourk ,123 diamond Street, suite 45 manhattan,</p>
            <p className="text-white underline">phone: +1 123 456 789</p>
            <p className="text-white">email: info@gold-website.com</p>
            <ul className="w-[70%] flex items-center justify-between mt-5">
                <li><a href="#"><FaInstagram className="text-white text-2xl cursor-pointer" /></a></li>
                <li><a href="#"><FaLinkedin className="text-white text-2xl cursor-pointer" /></a></li>
                <li><a href="#"><FaPaperPlane className="text-white text-2xl cursor-pointer" /></a></li>
                <li><a href="#"><FaFacebookF className="text-white text-2xl cursor-pointer" /></a></li>
            </ul>
        </div>
      </div>
    </>
  );
}
