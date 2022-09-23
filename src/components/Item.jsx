import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import Pizza from '../assets/pizza.png'
import { colors } from "../assets/colors";

const Item = ({image, cost, name}) =>{
    return (
        <div 
        style={{height:320, width:240}}
        className=" flex flex-col items-center relative">
            <div 
            style={{width:"max-content", 
            top:"-24px",
            right:"10px",
            height:"max-content", 
            position:"absolute"}}>
            <img src={image} alt='cost' style={{width:240}}/>
            </div>
            <div 
            style={{width:"180px", height:"200px",
            background:' linear-gradient(330deg, rgba(255,252,242,1) 0%, rgba(210,202,201,1) 34%, rgba(184,175,175,1) 95%,#B8AFAF)'}}
            className="flex rounded-t-3xl rounded-2xl pb-4 mt-20 mx-6 flex-col items-center justify-end space-y-3 shadow-2xl">
            <div className="space-y-1 ">
                <h6 
                className='font-bold text-center'
                style={{color:colors.black}}>{name}</h6>
                <small   className='font-thin'
                style={{color:colors.black}}>With vegetable</small>
            </div>
            <div>
                <h6
                className='font-bold'
                style={{color:colors.black}}
                >$ {cost}</h6>
            </div>
            </div>
          
            <div 
            
            className="cursor-pointer flex absolute justify-center items-center p-3 shadow-xl rounded-tl-xl rounded-tr-lg rounded-br-3xl rounded-bl-lg"
            style={{backgroundColor:colors.black, width:"max-content",top:4, right:32}}>
            <AiOutlineShoppingCart color={colors.white} />
            </div>
        </div>
        )
}

export default Item