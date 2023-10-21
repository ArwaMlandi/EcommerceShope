import React, { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
import Prouducts from '../component/Prouducts'
import Slider from '../component/Slider'

const Home = () => {
  const [product,setProduct]= useState([])
  const data=useLoaderData();
 
  
  useEffect(()=>{
    setProduct(data);
    
  },[data])
  return (
    <div className='bg bg-amber-200'>
     
      <Slider/>
      <Prouducts product={product}/>
        
    </div>
  )
}

export default Home