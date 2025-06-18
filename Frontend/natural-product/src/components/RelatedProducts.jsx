import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products, currency } = useSelector((state) => state.shop);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice().map(product => ({
        ...product,
        sizes: product.sizes || Object.keys(product.price || {}),
      }));
      productsCopy = productsCopy.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  // Function to format price with currency from Redux
  const formatPriceWithCurrency = (price, sizes) => {
    if (!price || typeof price !== 'object') {
      console.warn('Invalid price format in RelatedProducts:', price);
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
    <div className="my-24">
      <div className="text-center text-3xl py-3">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => {
          const formattedPrice = formatPriceWithCurrency(item.price, item.sizes);
          return (
            <ProductItem
              key={item._id}
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

export default RelatedProducts; 