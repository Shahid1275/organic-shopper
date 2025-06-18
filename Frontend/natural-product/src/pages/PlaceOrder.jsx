import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { token, backendUrl } = useSelector((state) => state.shop);
  const { cartTotal, delivery_Fee, grandTotal } = useSelector(getCartAmount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'email', 'streetAddress', 
      'city', 'state', 'zipCode', 'country', 'phone'
    ];
    
    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        toast.error(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`);
        return false;
      }
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      toast.error('Please enter a valid phone number (10-15 digits)');
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
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
          cartTotal,
          deliveryFee: delivery_Fee,
          grandTotal
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success('Order placed successfully!');
        navigate('/orders');
      } else {
        toast.error(response.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Order error:', error);
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-evenly gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <Title text1={'DELIVERY'} text2={'INFORMATION'} className="text-xl sm:text-2xl my-3" />
        
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="fullName"
            placeholder='Full Name *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="lastName"
            placeholder='Last Name *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <input 
          type="email" 
          name="email"
          placeholder='Email *' 
          className='border border-gray-300 py-2 px-4 rounded w-full' 
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        <input 
          type="text" 
          name="streetAddress"
          placeholder='Street Address *' 
          className='border border-gray-300 py-2 px-4 rounded w-full' 
          value={formData.streetAddress}
          onChange={handleInputChange}
          required
        />
        
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="city"
            placeholder='City *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="state"
            placeholder='State/Province *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className='flex gap-3'>
          <input 
            type="text" 
            name="zipCode"
            placeholder='Zip/Postal Code *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="country"
            placeholder='Country *' 
            className='border border-gray-300 py-2 px-4 rounded w-full' 
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <input 
          type="tel" 
          name="phone"
          placeholder='Phone * (10-15 digits)' 
          className='border border-gray-300 py-2 px-4 rounded w-full' 
          value={formData.phone}
          onChange={handleInputChange}
          required
          pattern="[0-9]{10,15}"
        />
      </div>

      {/* Order Summary */}
      <div className='mt-8'>
        <CartTotal className="mt-8 min-w-80" />
        
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          
          <div className='flex gap-3 flex-col lg:flex-row mb-6'>
            <div 
              onClick={() => setMethod('stripe')} 
              className={`flex items-center gap-3 border p-3 rounded cursor-pointer ${
                method === 'stripe' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            >
              <div className={`min-w-4 h-4 rounded-full border-2 ${
                method === 'stripe' ? 'bg-green-500 border-green-500' : 'border-gray-400'
              }`} />
              <img src={assets.stripe_logo} alt="Stripe" className='h-5 mx-4' />
            </div>
            
            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-3 border p-3 rounded cursor-pointer ${
                method === 'cod' ? 'border-black bg-gray-50' : 'border-gray-300'
              }`}
            >
              <div className={`min-w-4 h-4 rounded-full border-2 ${
                method === 'cod' ? 'bg-green-500 border-green-500' : 'border-gray-400'
              }`} />
              <span className='text-gray-600 text-sm font-medium mx-4'>CASH ON DELIVERY</span>
            </div>
          </div>
          
          <button 
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className={`w-full bg-black text-white py-3 text-sm font-medium rounded ${
              isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
            } transition-colors`}
          >
            {isProcessing ? 'PROCESSING ORDER...' : 'PLACE ORDER'}
          </button>
        </div>
      </div>
    </div>
  );
};
//this is the placeorder
export default PlaceOrder;