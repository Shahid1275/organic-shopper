import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products, currency } = useSelector((state) => state.shop);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  // Function to format price with currency from Redux
  const formatPriceWithCurrency = (price, size = 'S') => {
    let priceValue;

    // Handle different price input formats
    if (price && typeof price === 'object' && price[size]) {
      // If price is an object with sizes (e.g., { S: { display: '10.00', value: 10 } })
      priceValue = Number(price[size].value || price[size].display || 0);
    } else if (typeof price === 'number' || typeof price === 'string') {
      // If price is a number or string (e.g., 10 or "10.00")
      priceValue = Number(price || 0);
    } else {
      // Fallback if price is invalid
      console.warn(`Invalid price format in BestSeller for price:`, price);
      priceValue = 0;
    }

    // Return in the expected object format for ProductItem
    return {
      [size]: {
        display: `${currency}${priceValue.toFixed(2)}`,
        value: priceValue,
      },
    };
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
          console.log(`BestSeller - Product ${item.name}:`, { price: item.price, sizes: item.sizes });
          // Format the price to include currency from Redux
          const formattedPrice = formatPriceWithCurrency(item.price, 'S');
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={formattedPrice}
              sizes={item.sizes}
              displaySize="S" // Default to S size for consistency
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;