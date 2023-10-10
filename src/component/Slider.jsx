import React from 'react'
import s1 from '../images/Gr.svg'
import s2 from '../images/shoes.svg'
import s3 from '../images/skin.svg'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState } from 'react'
const Slider = () => {
    const data =[
      {
       
        img: s1
    },
    {
       
        img: s2
    },
    {
        
        img: s3
    }
    ]
      const prevSlide=()=>{
        const isFirstSlide= index===0;
        const newIndex= isFirstSlide? data.length-1:index-1;
        setIndex(newIndex)

      }
      const nextSlide=()=>{
        const isLastSlide= index=== data.length-1;
        const newIndex= isLastSlide? 0:index+1;
        setIndex(newIndex)

      }
    const [index, setIndex]=useState(2)
  return (
    <div className='max-w-[1480] h-[786] w-full m-auto py-16 px-4 relative group'>
    <div  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
    <img  className='w-full h-full rounded-2xl bg-center bg-cover duration-500' src={data[index].img}></img>
    <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide}  size={30}/>
    </div>
    <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30}/>
    </div>
    </div>
    </div>
  )
    
}

export default Slider