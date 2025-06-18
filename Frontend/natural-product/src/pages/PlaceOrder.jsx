// import React, { useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod')
//   const [formData, setFormData] = useState({
//     fullName: '',
//     lastName: '',
//     email: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     phone: ''
//   })
//   const [isProcessing, setIsProcessing] = useState(false)
//   const navigate = useNavigate()
//   const { token, backendUrl } = useSelector((state) => state.shop)
//   const dispatch = useDispatch()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handlePlaceOrder = async () => {
//     // Validate form
//     if (!formData.fullName || !formData.streetAddress || !formData.city || 
//         !formData.state || !formData.zipCode || !formData.country || !formData.phone) {
//       toast.error('Please fill all fields ')
//       return
//     }

//     setIsProcessing(true)
    
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/order/place`,
//         {
//           ...formData,
//           paymentMethod: method
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       )

//       if (response.data.success) {
//         toast.success('Order placed successfully!')
//         console.log('Order response:', response.data)
//         navigate('/orders')
//       } else {
//         toast.error(response.data.message || 'Failed to place order')
//       }
//     } catch (error) {
//       console.error('Order error:', error.response?.data || error.message)
//       toast.error(error.response?.data?.message || 'Failed to place order')
//     } finally {
//       setIsProcessing(false)
//     }
//   }

//   return (
//     <div className='flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ---left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className='flex gap-3'>
//           <input 
//             type="text" 
//             name="fullName"
//             placeholder='Full Name' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//           />
//           <input 
//             type="text" 
//             name="lastName"
//             placeholder='Last Name' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.lastName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <input 
//           type="email" 
//           name="email"
//           placeholder='Email address' 
//           className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' 
//           value={formData.email}
//           onChange={handleInputChange}
//             required
//         />
//         <input 
//           type="text" 
//           name="streetAddress"
//           placeholder='Street Address' 
//           className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' 
//           value={formData.streetAddress}
//           onChange={handleInputChange}
//           required
//         />
//         <div className='flex gap-3'>
//           <input 
//             type="text" 
//             name="city"
//             placeholder='City' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.city}
//             onChange={handleInputChange}
//             required
//           />
//           <input 
//             type="text" 
//             name="state"
//             placeholder='State' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.state}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className='flex gap-3'>
//           <input 
//             type="number" 
//             name="zipCode"
//             placeholder='Zip Code' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.zipCode}
//             onChange={handleInputChange}
//             required
//           />
//           <input 
//             type="text" 
//             name="country"
//             placeholder='Country' 
//             className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
//             value={formData.country}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <input 
//           type="tel" 
//           name="phone"
//           placeholder='Phone Number' 
//           className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[calc(96%+12px)]' 
//           value={formData.phone}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       {/* --------right side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           {/* ------payment method selection */}
//           <div className='flex gap-3 flex-col lg:flex-row'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
//               <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
//             </div>
//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className='w-full text-end mt-8'>
//             <button 
//               onClick={handlePlaceOrder}
//               disabled={isProcessing}
//               className={`cursor-pointer bg-black text-white px-16 py-3 text-sm ${isProcessing ? 'opacity-70' : ''}`}
//             >
//               {isProcessing ? 'Processing...' : 'PLACE ORDER'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PlaceOrder
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { getCartAmount } from '../redux/shopSlice';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, backendUrl } = useSelector((state) => state.shop);
  
  // Get calculated cart amounts from Redux
  const { cartTotal, delivery_Fee, grandTotal } = useSelector(getCartAmount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async () => {
    // Validate form
    if (!formData.fullName || !formData.streetAddress || !formData.city || 
        !formData.state || !formData.zipCode || !formData.country || !formData.phone) {
      toast.error('Please fill all required fields');
      return;
    }

    // Validate cart is not empty
    if (cartTotal <= 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsProcessing(true);
    
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/place`,
        {
          ...formData,
          paymentMethod: method,
          cartTotal,       // From Redux calculation
          deliveryFee: delivery_Fee,  // From Redux calculation
          grandTotal      // From Redux calculation
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        toast.success('Order placed successfully!');
        navigate('/orders');
      } else {
        toast.error(response.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Order error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side - Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        
        {/* Name Fields */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="fullName"
            placeholder='Full Name *' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="lastName"
            placeholder='Last Name' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Email */}
        <input 
          type="email" 
          name="email"
          placeholder='Email address *' 
          className='border border-gray-300 py-1.5 px-3.5 rounded w-full' 
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        {/* Address */}
        <input 
          type="text" 
          name="streetAddress"
          placeholder='Street Address *' 
          className='border border-gray-300 py-1.5 px-3.5 rounded w-full' 
          value={formData.streetAddress}
          onChange={handleInputChange}
          required
        />
        
        {/* City & State */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="city"
            placeholder='City *' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="state"
            placeholder='State/Province *' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {/* Zip & Country */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="zipCode"
            placeholder='Zip/Postal Code *' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="country"
            placeholder='Country *' 
            className='border border-gray-300 py-1.5 px-3.5 rounded w-full sm:w-[48%]' 
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {/* Phone */}
        <input 
          type="tel" 
          name="phone"
          placeholder='Phone Number *' 
          className='border border-gray-300 py-1.5 px-3.5 rounded w-full' 
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Right side - Order Summary */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row mb-6'>
            <div 
              onClick={() => setMethod('stripe')} 
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'stripe' ? 'border-black' : 'border-gray-300'
              }`}
            >
              <div className={`min-w-3.5 h-3.5 rounded-full border ${
                method === 'stripe' ? 'bg-green-500 border-green-500' : 'border-gray-400'
              }`}></div>
              <img src={assets.stripe_logo} alt="Stripe" className='h-5 mx-4' />
            </div>
            
            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'cod' ? 'border-black' : 'border-gray-300'
              }`}
            >
              <div className={`min-w-3.5 h-3.5 rounded-full border ${
                method === 'cod' ? 'bg-green-500 border-green-500' : 'border-gray-400'
              }`}></div>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          
          {/* Order Button */}
          <div className='w-full text-end mt-8'>
            <button 
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className={`cursor-pointer bg-black text-white px-16 py-3 text-sm ${
                isProcessing ? 'opacity-70' : 'hover:bg-gray-800'
              } transition-colors`}
            >
              {isProcessing ? 'Processing...' : 'PLACE ORDER'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;