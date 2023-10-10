import React from 'react'
import Card from './Card'

const Prouducts = ({product}) => {
  console.log(product)
  return (
    <div className='py-10'>
  <div className='flex flex-col items-center gap-4'>
    <h1 className="text-2xl text-black py-2 w-80 text-center bg-red-700 rounded-2xl font-bold">Shopping EveryThing</h1>
    <p className='max-w-[700px] text-gray-600 text-center font-bold'>
      Below are all the products in our store that you can view and enjoy shopping.
    </p>
  </div>
  <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
    {product?.map((item) => (
      <Card key={item._id} productDetailes={item} />
    ))}
  </div>
</div>
  )
}

export default Prouducts
