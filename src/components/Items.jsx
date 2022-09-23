
import React from 'react'


//item component
import Item from './Item'
//images
import Pizza from '../assets/pizza.png'
import Salad from '../assets/salad.png'
import Spagetti from '../assets/spagetti.png'
import Pasta from '../assets/pasta.png'
import Beef from '../assets/beef.png'

const Items = () => {
  return (
    <div 
    className='md:flex mt-10 '
    style={{}}>
        <Item image={Pizza} cost={24} name='Pizza'/>
        <Item image={Spagetti} cost={43} name='Spagetti'/>
        <Item image={Beef} cost={33} name='Beef'/>
        <Item image={Pasta} cost={19} name='Pasta'/>
        <Item image={Salad} cost={28}  name='Pappardelle'/>
    </div>
  )
}

export default Items