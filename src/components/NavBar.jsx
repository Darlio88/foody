
import React from 'react'

import { BiBasket } from "react-icons/bi";
import {colors} from '../assets/colors'


const NavBar = () => {
  return (
    <div 
    style={{flex:1}}
    className='flex justify-between items-center shadow-xl w-full p-2 rounded-lg'>
      <div  className="flex text-5xl md:text-3xl font-semibold">
      <h6 style={{color:colors.black}}>F</h6>
      <h6 style={{color:colors.red}} >oo</h6>
      <h6 style={{color:colors.black}}>dy</h6>
      </div>
      <ul style={{color:colors.black}} className=' hidden md:flex space-x-10 items-center'>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div  
      style={{color:colors.black}}
      className='flex space-x-2 items-center'>
        <div className='relative'>
        <BiBasket size={28} />
        <div 
        style={{backgroundColor:colors.red, top:0, right:0, borderRadius:"50%", height:"16px", width:"16px"}}
         className='absolute p-1 flex justify-center items-center'>
        <h6 style={{color:colors.white}}>5</h6>
        </div>
        </div>
        <button 
        className="hidden shadow-xl md:block px-5 py-1.5 rounded-full"
        style={{backgroundColor:colors.red, color:colors.white}}>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar