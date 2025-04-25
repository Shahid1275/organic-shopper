import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useSelector((state) => state.shop);

  return (
    <Link
      to={`/product/${id}`}
      className="group block w-full transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:shadow-sm md:hover:-translate-y-1.5 md:hover:shadow-md focus:outline-none"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-square rounded-lg mb-2 md:mb-3 shadow-xs">
        <div className="relative h-full w-full">
          <img
            className="absolute h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.15,0.75,0.5,1)] group-hover:scale-105 md:group-hover:scale-110"
            src={image[0]}
            alt={name}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-3 md:group-hover:opacity-5 transition-opacity duration-300" />
        </div>
      </div>

      {/* Product details */}
      <div className="px-0.5 space-y-0.5 md:space-y-1">
        <p className="text-gray-800 text-xs md:text-sm line-clamp-2 transition-colors duration-200 group-hover:text-indigo-600">
          {name}
        </p>
        <p className="text-gray-900 font-medium text-xs md:text-sm transition-colors duration-200 group-hover:text-indigo-800">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;