import React from "react";
import logo from "../images/logoevery.png";
import pay from "../images/pay.png";
import { ImGithub } from "react-icons/im";
import {BsPersonFill,BsPaypal} from 'react-icons/bs'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaHome,
} from "react-icons/fa";
import {MdLocationOn} from 'react-icons/md'
export const Footer = () => {
  return (
    <div className="bg-white text-gray-800 py-20 font-titleFont">
      
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4">
      <div className="flex flex-col gap-0">
        <img className="w-32" src={logo} />
        {/*}  <p className='text-white text-sm tracking-wide'>
              © Reactjs.com
  </p>*/}
        <img className="w-52" src={pay} />
        <div className="ml-7 flex flex-row gap-4">
          <ImGithub className="hover:text-black text-gray-700 duration-300 cursor-pointer" />
          <FaFacebook className="hover:text-blue-600 text-gray-700 duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-red-600 text-gray-700 duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-blue-600 text-gray-700 duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 text-gray-700 duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <h2 className="text-2xl font-semibold text-black mb-4">locate us</h2>
        <div className="text-base flex flex-col gap-5">
          <p>Address1:Dubai-USA</p>
          <p>Address2:Abu Dhabi-USA</p>
          <p>Phone:+971 56 147 2254</p>
          <p>Email: Everyshop12@gmail.com</p>
          <p>  </p>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <h2 className="text-2xl font-semibold text-black mb-4">Profile</h2>
        <div className="text-base flex flex-col gap-5">
          <p className="flex items-center gap-3 hover:text-red-600 duration-300 cursor-pointer">
            <span><BsPersonFill/></span>
            {" "}
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-red-600 duration-300 cursor-pointer">
            <span><FaHome/></span>
            {" "}
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-red-600 duration-300 cursor-pointer">
            <span><BsPaypal/></span>
            {" "}
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-red-600 duration-300 cursor-pointer">
            <span><MdLocationOn/></span>
            {" "}
            help & support
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center mt-10">
      <input className="bg-transparent border-[1px] border-black px-4 py-2 text-sm md:mr-4 mb-4 md:mb-0" placeholder="e-mail" type="text"></input>
      <button className="text-sm border text-red-600 border-t-0 hover:bg-black active:bg-white active:text-black">Subscribe</button>
    </div>
  </div>
  );
};
