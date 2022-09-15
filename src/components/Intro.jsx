import React from 'react'
import { colors } from '../assets/colors'
import User4 from '../assets/user4.png'
import User1 from '../assets/user1.png'
import User2 from '../assets/user2.png'
import User3 from '../assets/user3.png'

import Hamburger from '../assets/hamburger.png'
import Pizza from '../assets/pizza.png'

import { BsFillStarFill } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";


const Intro = () => {
  return (
    <div className='w-full md:mt-5 mt-3 space-y-4 md:flex items-center justify-between'>
        {/* left */}
        <div className='w-full space-y-3 md:w-6/12 md:space-y-6'>
            <div className='flex flex-wrap md:block text-2xl space-x-1 font-light md:text-5xl md:font-bold'>
                <h1 className='md:leading-normal md:tracking-normal'>It is not just, </h1>
                <h1  className='md:leading-normal md:tracking-normal'>food, It is </h1>
                <h1  className='md:leading-normal md:tracking-normal'> experience.</h1>
            </div>
            <div className='flex justify-betwwen items-center space-x-4'>
                <button 
                className="shadow-xl hidden md:block px-5 py-1.5 rounded-full"
                style={{backgroundColor:colors.red, color:colors.white}}>View Menu</button>
                <button 
                className=" shadow-xl hidden md:block px-5 py-1.5 rounded-full"
                style={{backgroundColor:colors.white, color:colors.black}}>Book Table</button>
            </div>
            <div>
                <h6>Reviews</h6>
                <div className='flex relative mt-2'>
                    <div 
                    style={{height:48, width:48, position:"absolute",left:0 , borderRadius:24, overflow:'hidden', borderWidth:1,backgroundColor:colors.black, borderColor:colors.grayLight}}>
                        <img src={User1} alt='food' style={{height:48, width:48, display:'block'}} />
                    </div>
                    <div 
                    style={{height:48, width:48, position:"absolute",left:32 , borderRadius:24, overflow:'hidden', borderWidth:1, backgroundColor:colors.black, borderColor:colors.grayLight}}>
                        <img src={User2} alt='food' style={{height:48, width:48, display:'block'}} />
                    </div>
                    <div 
                    style={{height:48, width:48, position:"absolute", left:64 , borderRadius:24, overflow:'hidden', borderWidth:1, backgroundColor:colors.black, borderColor:colors.grayLight}}>
                        <img src={User4} alt='food' style={{height:48, width:48, display:'block'}} />
                    </div>
                    <div 
                    className='flex justify-center items-center'
                    style={{height:48, width:48, position:"absolute",left:96, borderRadius:24, overflow:'hidden',backgroundColor:colors.black, borderWidth:1, borderColor:colors.grayLight}}>
                        <h6
                        className='text-xs'
                        style={{color:colors.white}}>+25</h6>
                    </div>
                </div>
                <div 
                style={{color:colors.brown}}
                className='flex mt-16 space-x-1'>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                </div>
            </div>
           
        </div>

        {/* right */}

        <div
        
        className=' md:w-6/12 relative block'>
            <div
            style={{}}
            >
                <img src={Pizza} alt='food' style={{width:640}}  />
            </div>
            <div 
            style={{backgroundColor:colors.white,
                 opacity:0.6,minWidth:250,
                 top:12,
                 left:0, 
                 maxWidth:280, zIndex:10}}
            className='py-2 px-3 rounded-xl shadow-2xl absolute md:space-y-2'>
                <div>
                    <h6 
                    className='font-bold'
                    style={{color:colors.black}}>5%</h6>
                    <div className='flex space-x-1'>
                        <p 
                        className='text-sm'
                        style={{color:colors.red}}>Discount</p>
                        <p className='text-sm'>for the next two orders</p>
                    </div>
                    <GiGearHammer size={32} style={{position:'absolute', top:-12, right:100}}/>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Intro