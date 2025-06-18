import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="my-12 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
          Our Commitment to You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Policy Item 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src={assets.exchange_icon}
              alt="Easy Exchange Policy"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Easy Exchange Policy
            </h3>
            <p className="text-gray-600 text-sm">
              We offer a hassle-free exchange policy to ensure your satisfaction.
            </p>
          </div>
          {/* Policy Item 2 */}
          <div className="flex flex-col items-center text-center p-6	bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src={assets.quality_icon}
              alt="7 Days Return Policy"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              7 Days Return Policy
            </h3>
            <p className="text-gray-600 text-sm">
              Enjoy peace of mind with our 7-day free return policy.
            </p>
          </div>
          {/* Policy Item 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
              src={assets.support_img}
              alt="Best Customer Support"
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Best Customer Support
            </h3>
            <p className="text-gray-600 text-sm">
              We're here for you with 24/7 customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;