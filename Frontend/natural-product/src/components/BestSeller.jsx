import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products, currency } = useSelector((state) => state.shop);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true).slice(0, 5);
    setBestSeller(bestProduct.map(product => ({
      ...product,
      sizes: product.sizes || Object.keys(product.price || {}),
    })));
  }, [products]);

  // Function to format price with currency from Redux
  const formatPriceWithCurrency = (price, sizes) => {
    if (!price || typeof price !== 'object') {
      console.warn('Invalid price format in BestSeller:', price);
      return { S: { display: `${currency}0.00`, value: 0 } };
    }

    const formattedPrice = {};
    sizes.forEach(size => {
      if (price[size]) {
        const value = Number(price[size].value || price[size].display || 0);
        formattedPrice[size] = {
          display: `${currency}${value.toFixed(2)}`,
          value,
        };
      }
    });

    return formattedPrice;
  };

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLING" />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-500">
          🔥 Shop our most-loved products – these top picks are flying off the shelves! Discover what everyone’s raving about, <br />from trending styles to must-have essentials.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => {
          const formattedPrice = formatPriceWithCurrency(item.price, item.sizes);
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={formattedPrice}
              sizes={item.sizes}
              displaySize={item.sizes[0] || 'S'} // Default to first size
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;