import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ---left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='Full Name' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
          <input type="text" placeholder='Last Name' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
        </div>
        <input type="email" placeholder='Email address' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' />
        <input type="text" placeholder='street address' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' />
        <div className='flex gap-3'>
          <input type="text" placeholder='city' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
          <input type="text" placeholder='state' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='zipCode' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
          <input type="text" placeholder='country' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' />
        </div>
        <input type="number" placeholder='phone' className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' />
      </div>
      {/* --------right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ------payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/orders')} className='cursor-pointer bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder