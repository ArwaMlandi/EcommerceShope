import React from "react";
import { BsArrowRight} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtocart } from "../redux/shopSlice";
import { ToastContainer, toast } from 'react-toastify';
import {  resetCart } from '../redux/shopSlice'
const Card = ({ productDetailes }) => {
  const dispatsh = useDispatch()
  const navigate= useNavigate()
  const _id= productDetailes.title;
  const idstring=(_id)=>{
    return String(_id).toLowerCase().split(" ").join("")
  }
  const handleToDetailes =()=>{
    navigate( `/ProductOne/${rootId}`,{
      state:{
        item:productDetailes,
      }
    })
  }
  const rootId= idstring(_id)
  
  return (
    <div className="group relative">
      <div onClick={handleToDetailes} className="w-full h-96 overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={productDetailes.image}
        />
      </div>
      <div className="w-full border-[1px] px-1 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {productDetailes.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="text-gray-500 line-through">
                $ {productDetailes.oldPrice}
              </p>
              <p className="text-red-600 font-bold">
                $ {productDetailes.price}
              </p>
            </div>
            <p onClick={()=>dispatsh(addtocart({
              _id:productDetailes._id,
              title:productDetailes.title,
              image:productDetailes.image,
              price:productDetailes.price,
              quantity:1,
              description:productDetailes.description
            }))& toast.success( `${productDetailes.title} is added`)}
            className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900
             flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart {" "} 
              <span><BsArrowRight/></span>
            </p>
          </div>
        </div>
        <div>
          <p ><span className="text-sm underline underline-offset-4">type:</span> <span className="text-sm text-red-500 font-semibold  no-underline"> {productDetailes.category}</span> </p>
        </div>
        <div className="absolute top-4 right-0">
          {productDetailes.isNew && <p className="bg-red-500 text-white font-semibold px-6 py-1">Sale</p>}
        </div>
       
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
  );
};

export default Card;
