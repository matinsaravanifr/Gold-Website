import React, { useEffect, useState } from "react";
import ImgLive from "./../../assets/LivePrice/Radio button checked.svg";
import axios from "axios";
export default function LivePrice() {
  const [Price, setPrice] = useState(0);
  const [Amount, setAmount] = useState(0);
  useEffect(() => {
    const fetchprice = () => {
      axios
        .get("https://api.gold-api.com/price/XAU")
        .then((res) => {
          setPrice(res.data.price);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchprice();
    const update = setInterval(fetchprice, 10000);
    return () => clearInterval(update);
  }, []);
  const CalculatePrice = (e) => {
    let grams = e.target.value;
    setAmount(grams * Price);
  };
  return (
    <>
      <div className="w-[85%] m-auto flex justify-center">
        <div className="w-full h-[300px] bg-gold-500 rounded-[8px]">
          <div className="flex justify-between w-[85%] m-auto mt-8">
            <h1 className="font-bold text-2xl ">
              Get Instant Prices On Your Gold
            </h1>
            <h3 className="text-red-600 font-bold flex items-center">
              <img className="w-[20px] mr-2" src={ImgLive} alt="" />
              LIVE RATE
            </h3>
          </div>
          <div className="flex justify-around mt-20 ">
            <div className="">
              <h1 className="mb-3 font-bold">BUYING PRICE</h1>
              <span className="border-2 border-white p-3">24K.999.0</span>
            </div>
            <h1 className="font-bold">{Price.toFixed(1)}/gm</h1>
            <div>
              <input
                onChange={CalculatePrice}
                className="w-[200px] h-[50px] bg-[#DADADA] opacity-[50%] pl-1.5 border-none rounded-[5px] "
                placeholder="Grams"
                type="number"
              />
              <div className="w-[200px] h-[50px] bg-[#DADADA] opacity-[50%] pl-1.5 border-none mt-2.5 flex items-center rounded-[5px]">
                <p>{Amount.toFixed(2)}</p>
              </div>
            </div>
            <button className="w-[200px] h-[50px] bg-redbtn-100 text-white font-bold rounded-[5px] cursor-pointer">
              Buy Now{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
