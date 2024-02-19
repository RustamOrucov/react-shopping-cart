import React from 'react';

const ProductItem = ({ product ,setCart}) => {

const addToCart=(product)=>{
    setCart((prevState)=>[...prevState,product]);


}


  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
      <div className='h-[400px] w-full'>
  <img className='w-auto h-full object-cover rounded-t-lg' src={product.image} alt="product-image" />
    </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
        <p className='text-gray-500 my-2'>{product.price} $</p>
        <button className='bg-blue-500 text-white px-4 py-4 w-full rounded hover:bg-blue' onClick={()=>addToCart(product)}>add</button>
      </div>
    </div>
  )
}

export default ProductItem;
