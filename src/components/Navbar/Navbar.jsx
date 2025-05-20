import React from 'react'
import logo from './../../assets/logo.png'
export default function Navbar() {
  return (
    <>
    <div className='mt-2.5'>
        <div className='flex  justify-between w-[85%] h-[50px] m-auto   ' >
        <img src={logo} alt="logo" />
        <ul className='flex items-center'>
            <li className='mr-4'><a className='text-white' href="#">How To Set Gold</a></li>
            <li className='mr-4'><a className='text-white' href="#">What We Buy</a></li>
            <li className='mr-4'><a className='text-white' href="#">Services</a></li>
            <li className='mr-4'><a className='text-white' href="#">Track your Gold</a></li>
            <li className='mr-4'><a className='text-white' href="#">About Us</a></li>
            <li className='mr-4'><a className='text-white' href="#">Contact Us</a></li>
        </ul>
        </div>
            
    </div>
    
    </>
  )
}
