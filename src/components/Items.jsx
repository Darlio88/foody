
import React from 'react'


//item component
import Item from './Item'

const Items = () => {
  return (
    <div 
    className='md:flex mt-10 '
    style={{}}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
  )
}

export default Items