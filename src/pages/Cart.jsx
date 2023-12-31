import React, { useEffect ,useState } from 'react'
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import CartItem from '../component/CartItem';

const Cart = () => {
  const [totalPrice,setTotalPrice]=useState();
  const [payNow,setPayNow]=useState();
  const productData = useSelector((state) => state.shop.productData);
  const userInfo= useSelector((state)=>state.shop.userInfo);
  useEffect(()=>{
    let price=0;
    productData.map((item)=>{
      price+=item.price * item.quantity;
      return price

    })
    setTotalPrice(price.toFixed(2))
  },[productData])

const handleCheckout =()=>{
  if(userInfo){
    setPayNow(true)
  }else{
    toast.error("Please Sign-in to Checkout")
  }
}

  return (
    <div className="bg bg-amber-200 relative">
    <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row items-start">
      <CartItem />
      <div className="w-full md:w-2/3 bg-white py-6 px-4 md:ml-16 md:mt-0 md:pt-6">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-6">
          <h2 className="text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal{" "}
            <span className="font-titleFont font-bold text-lg">
              ${totalPrice}
            </span>
          </p>
  
          <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              incidunt consequuntur
            </span>
          </p>
        </div>
        <p className="font-semibold mt-6">
          Total: <span className="text-xl font-bold text-red-600">${totalPrice}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-red-500 duration-300"
        >
          Proceed to checkout
        </button>
        {
          payNow && <div className='w-full mt-6 flex items-center justify-center'>
            <StripeCheckout
         
            stripeKey='pk_test_51NuL36APIZ1QcVtg30wxa5fanZDKiwC7URKXCZsenXjZuB8axgu4kdp27fPPoI0tK1UYm1RzT9DVmZRXNftc0UYH00yShE7ZIg'
            name='Shop online'
            amount={totalPrice * 100}
            label="Pay Now"
            description={ `Your payment amount is $ ${totalPrice} `}
            //token={payment}
            email={userInfo.email}
            />
          </div>
        }
      </div>
    </div>
  </div>
  )
}

export default Cart