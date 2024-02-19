import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const CartIcon = ({cart}) => {
  return (
    <div>
       <div className='relative'>
     <CiShoppingCart  className='text-2xl'/>
     <span className='bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs'>{cart.length}</span>
     </div>
    </div>
  )
}

export default CartIcon
