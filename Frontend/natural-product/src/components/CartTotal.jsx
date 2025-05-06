import React from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import { getCartAmount } from '../redux/shopSlice';

const CartTotal = () => {
  const { cartTotal, delivery_Fee, grandTotal } = useSelector(getCartAmount);
  const { currency } = useSelector((state) => state.shop);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 text-sm mt-2'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>
            {currency}
            {cartTotal.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_Fee.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Grand Total</p>
          <p>
            {currency}
            {grandTotal.toFixed(2) === '0' ? '0.00' : grandTotal.toFixed(2) }
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;