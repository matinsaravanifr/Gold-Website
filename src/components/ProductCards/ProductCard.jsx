import React from 'react'
import img from'./../../assets/Product/product-1.png'
export default function ProductCard({image,title,cutie}) {
  return (
    <div className='w-[250px] flex flex-col items-center mt-3.5'>
        <img className='' src={image} alt="" />
        <h1  className='text-white font-bold text-center mt-2'>{title}</h1>
        <h1 className='text-gold-500 text-center mt-2 mb-5'>{cutie}</h1>
        <button className='w-[200px] h-[50px] bg-redbtn-100 rounded-[5px] font-bold text-white cursor-pointer'>Buy Now</button>
    </div>
  )
}
