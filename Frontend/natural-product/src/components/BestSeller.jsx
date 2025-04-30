import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';
const BestSeller = () => {
    const {products} = useSelector((state) => state.shop);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller === true);
        setBestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8 '>
            <Title text1="BEST" text2="SELLING"/>
            <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-500 '>
            🔥 Shop our most-loved products – these top picks are flying off the shelves! Discover what everyone’s raving about, <br />from trending styles to must-have essentials.
            </p>

        </div>
        <div  className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
        </div>

    </div>
  )
}

export default BestSeller