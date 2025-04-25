import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
  const { products } = useSelector((state) => state.shop);
  const [latestCollections,setLatestCollections] = useState([]);
  useEffect(()=>{
    setLatestCollections(products.slice(0,10));
  },[])
  
  
  return (
    <div className='my-10'>
   <div className='text-center py-8 text-3xl'> 
   <Title text1="LATEST" text2="COLLECTIONS"/>
   <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
   our top collections of premium personal care products, including nourishing shampoos,luxurious soaps,<br />  hydrating oils, soothing creams, and refreshing face washes for men, women, and kids.</p>
   </div>

   {/* rendering produccts  */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
   {
    latestCollections.map((item,index)=>(
      <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
   }
    </div>
    </div>
  )
}

export default LatestCollections;