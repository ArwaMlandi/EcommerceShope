import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
  resetCart,
} from "../redux/shopSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const CartItem = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);

  return (
    <div className="w-2/3">
      <div className="w-full">
        <h2>Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            className="flex bg bg-white py-4  items-center justify-between gap-6 mt-3"
            key={item._id}
          >
            <div className="flex items-start gap-2">
              <MdOutlineClose
                size={40}
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title}is removed `)
                }
                className=" text-gray-500 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="ItemImage"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">{item.price}</p>
            <div className="w-1/3 flex items-center gap-6 text-lg">
              <span
                onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
                className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              >
                -
              </span>
              <p>{item.quantity}</p>
              <span
                onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
                className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
              >
                +
              </span>
            </div>
            <div className="px-3 flex items-center font-titleFont font-bold text-lg">
              <p>${item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart Is Empty")
        }
        className="py-6 mt-4 flex items-center justify-center border-[1px]-red-600 bg bg-black text-white hover:bg-red-600 cursor-pointer duration-300 w-1/3 h-8"
      >
        Reset Cart
      </button>
      <Link to="/EcommerceShope/">
        <button className="mt-8 text-red-600 hover:text-black duration-300 flex items-center gap-1">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
