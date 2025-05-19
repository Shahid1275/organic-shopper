import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
  const { currency, products } = useSelector((state) => state.shop);
  const [latestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    const latest = products.slice(0, 5).map(product => ({
      ...product,
      sizes: product.sizes || Object.keys(product.price || {}),
    }));
    setLatestCollections(latest);
  }, [products]);

  // Function to format price with currency from Redux
  const formatPriceWithCurrency = (price, sizes) => {
    if (!price || typeof price !== 'object') {
      console.warn('Invalid price format in LatestCollections:', price);
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
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          our top collections of premium personal care products, including nourishing shampoos, luxurious soaps,<br /> hydrating oils, soothing creams, and refreshing face washes for men, women, and kids.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestCollections.map((item, index) => {
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

export default LatestCollections;