import React from 'react'
import logo from '../images/logoevery.png'
import login from '../images/login.jpg'
import icon from '../images/Group 1.svg'
import { Link } from "react-router-dom";
import Cart from '../pages/Cart';
import { useState } from 'react';
import { GrMenu, GrClose, GrShop, GrCart, GrLogin } from 'react-icons/gr';
import {RiLoginCircleLine} from 'react-icons/ri'
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
const Header = () => {
const userInfo= useSelector((state)=>state.shop.userInfo)
  const productData= useSelector((state)=>state.shop.productData);
  console.log(productData)
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-red-900 sticky top-0 z-50'>
    <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
      <Link to="/">
        <div>
          <img className='w-28' src={logo} alt="Logo" />
        </div>
      </Link>
      <div className='flex items-center'>
        <div className='md:hidden ml-4'>
          {!isMenuOpen ? (
            <GrMenu className='cursor-pointer' size={20} onClick={toggleMenu} />
          ) : (
            <GrClose className='cursor-pointer' size={20} onClick={toggleMenu} />
          )}
        </div>
        <ul className={`md:flex md:items-center md:gap-8 ${isMenuOpen ? 'flex-col' : ''} ${isMenuOpen ? 'bg-white p-2 absolute left-40 top-10 border border-white rounded-[10%]' : ''} ${isMenuOpen ? '' : 'hidden'} sm:flex sm:items-center sm:gap-8 ${isMenuOpen ? 'flex-col' : ''} ${isMenuOpen ? 'bg-white p-2 absolute left-20 border border-white rounded-[10%]' : ''} ${isMenuOpen ? 'block' : 'hidden'}`}>
         <Link to='/'><li className='text-base text-black font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li></Link> 
          <li className='text-base text-black font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
          <li className='text-base text-black font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
          <li className='text-base text-black font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
          <li className='text-base text-black font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
        <div className='flex items-center ml-2'>
        <Link to='/Cart'>
          <div className='relative'>
         
          <GrShop  size={23} className='cursor-pointer w-14' />
          <span className='absolute w-3 top-1 left-5 text-sm flex items-center justify-center text-red-600'>
            {productData.length}
          </span>
        
          </div>
          </Link>
         
         <Link to='/Login'>
         <img className='w-8 h-8 rounded-full' src={ userInfo?userInfo.image : login}/>
          
          </Link>
          {
            userInfo &&( <p className='text-base font-semibold underline underline-offset-2 px-3'>{userInfo.name}</p>)
          }
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
    
  </div>
  )
}

export default Header