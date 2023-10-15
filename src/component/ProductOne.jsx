import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'
import {MdOutlineStar} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/shopSlice';
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineArrowLeft } from 'react-icons/hi';
const ProductOne = () => {
  const dispatsh= useDispatch()
  const location= useLocation();
  const [detailes,setDetailes]= useState({});
  const [baseQty,setBaseQty]= useState(1)
  useEffect(()=>{
    setDetailes(location.state.item)
    
  },[])
  return (
    <div className="max-w-screen-xl mx-auto my-10 flex flex-col gap-5 sm:flex-row sm:gap-10">
    <div className="w-full sm:w-2/5 relative">
      <img className="w-full h-[550px] object-cover" src={detailes.image} />
      <div className="absolute top-4 right-0">
        {detailes.isNew && (
          <p className="bg-red-500 text-white font-semibold px-6 py-1">Sale</p>
        )}
      </div>
    </div>
    <div className="w-full sm:w-3/5 flex flex-col justify-center gap-5 px-4 sm:px-0">
      <div>
        <h2 className="text-3xl">{detailes.title}</h2>
        <div className="flex items-center gap-4 mt-3">
          <p className="text-gray-500 line-through text-2xl">
            $ {detailes.oldPrice}
          </p>
          <p className="text-red-600 font-bold text-2xl">
            $ {detailes.price}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 text-base">
        <div className="flex text-yellow-400">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </div>
        <p className="text-xs text-gray-300">(1 Customer review)</p>
      </div>
      <p className="text-base text-gray-500 mt-3">{detailes.description}</p>
      <div className="flex gap-4">
        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
          <p className="text-sm">Quantity</p>
          <button onClick={()=>setBaseQty(baseQty===1? (baseQty=1) : baseQty-1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-red-500 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
          <span>{baseQty}</span>
          <button onClick={()=>setBaseQty(baseQty+1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-red-500 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
        </div>
        <button
         onClick={()=>dispatsh(addtocart({
          _id:detailes._id,
          title:detailes.title,
          image:detailes.image,
          price:detailes.price,
          quantity:baseQty,
          description:detailes.description
        })) & toast.success( `${detailes.title} is added`)
      }
         className="bg-gray-500 text-white py-3 px-6 hover:bg-red-500">Add to Cart</button>
      </div>
      <p className="text-base text-gray-500">Category: <span className="text-base text-red-500">{detailes.category}</span></p>
      <Link to="/EcommerceShope/">
      <button className="mt-8 text-red-600 hover:text-black duration-300 flex items-center gap-1">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
        </Link>
    </div>
   
    <ToastContainer
      position='top-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'/>
  </div>
  )
}

export default ProductOne