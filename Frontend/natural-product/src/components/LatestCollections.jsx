import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
  const { currency, products } = useSelector((state) => state.shop);
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    setLatestCollections(products.slice(0, 10));
  }, [products]);

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
      console.warn(`Invalid price format in LatestCollections for price:`, price);
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
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          our top collections of premium personal care products, including nourishing shampoos, luxurious soaps,<br /> hydrating oils, soothing creams, and refreshing face washes for men, women, and kids.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestCollections.map((item, index) => {
          // Format the price to include currency from Redux
          const formattedPrice = formatPriceWithCurrency(item.price, 'S');

          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={formattedPrice}
              sizes={item.sizes || ['S']}
              displaySize="S"
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollections;