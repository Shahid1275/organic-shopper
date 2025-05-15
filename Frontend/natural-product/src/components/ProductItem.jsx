import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, sizes, displaySize }) => {
  const { currency } = useSelector((state) => state.shop);

  // Determine the price to display with fallback
  const getPriceDisplay = () => {
    console.log(`ProductItem Debug - ${name}:`, { price, sizes, displaySize });

    if (!price || typeof price !== 'object' || !sizes || !Array.isArray(sizes) || sizes.length === 0) {
      console.warn(`Invalid price or sizes for product ${name}:`, { price, sizes });
      return `${currency}0.00`;
    }

    if (displaySize && price[displaySize] && price[displaySize].display) {
      return price[displaySize].display; // Already includes currency
    }

    const validSize = sizes.find(size => price[size] && price[size].display);
    if (validSize) {
      return price[validSize].display; // Use the first valid price
    }

    console.warn(`No valid price found for product ${name} with sizes ${sizes}:`, price);
    return `${currency}0.00`;
  };

  const displayPrice = getPriceDisplay();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
      to={`/product/${id}`}
      onClick={scrollToTop}
      className="group block w-full transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-xl"
    >
      <div className="relative overflow-hidden aspect-square rounded-xl mb-3 bg-gray-50 shadow-sm">
        <div className="relative h-full w-full">
          <img
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-109"
            src={image && image[0] ? image[0] : '/placeholder-image.jpg'}
            alt={name || 'Product'}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="px-1 space-y-1">
        <p className="text-gray-800 text-sm md:text-base font-medium line-clamp-2 transition-colors duration-200">
          {name || 'Unnamed Product'}
        </p>
        <p className="text-gray-800 font-semibold text-base md:text-lg transition-colors duration-200">
          {displayPrice}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;