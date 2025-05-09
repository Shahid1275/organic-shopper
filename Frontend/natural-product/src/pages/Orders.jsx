import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useSelector((state) => state.shop);

  // Format date function (keeps the same date for all items as in original)
  const formatDate = () => {
    return '25, Jul, 2025';
  };

  return (
    <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-2xl mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => {
          // Safely access price for size M, default to 0 if invalid
          const price = item.price && typeof item.price === 'object' && !isNaN(item.price['M'])
            ? item.price['M']
            : 0;

          return (
            <div
              key={index}
              className="py-6 px-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Product Info */}
                <div className="flex items-start gap-6">
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
                    src={item.image && item.image[0] ? item.image[0] : '/placeholder-image.jpg'}
                    alt={item.name || 'Product'}
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.name || 'Unnamed Product'}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-gray-700">
                      <p className="text-lg font-medium text-gray-900">
                        {currency}
                        {price.toFixed(2)}
                      </p>
                      <span className="text-gray-400">|</span>
                      <p>Quantity: 1</p>
                      <span className="text-gray-400">|</span>
                      <p>Size: M</p>
                    </div>

                    <p className="text-sm text-gray-600">
                      Ordered on: <span className="ml-1">{formatDate()}</span>
                    </p>
                  </div>
                </div>

                {/* Order Status & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:w-2/5">
                  <div className="flex items-center gap-2">
                    <span className="min-w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-sm sm:text-base text-gray-700">Ready to Ship</p>
                  </div>

                  <button
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-w-[120px]"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;