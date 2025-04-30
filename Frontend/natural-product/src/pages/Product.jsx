
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.shop);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setMainImage(product.image[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Product Images and Description/Reviews */}
        <div className="flex flex-col gap-6">
          {/* Product Images */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-x-visible sm:overflow-y-auto max-h-[500px] pb-2 sm:pb-0 scrollbar-hide">
              {productData.image.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg cursor-pointer transition-all duration-200`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${productData.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-contain bg-white rounded-lg"
                  />
                  {mainImage === img && (
                    <div className="absolute inset-0 border-2 border-gray-300 rounded-lg pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 w-full h-[400px] sm:h-[500px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={mainImage}
                alt={productData.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Description and Reviews Section */}
          <div>
            <div className="flex gap-6 border-b border-gray-200">
              <button
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews (122)
              </button>
            </div>
            <div className="mt-6 text-gray-600 text-sm leading-relaxed">
              {activeTab === 'description' ? (
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p>
                    An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
                  </p>
                  <p className="mt-4">
                    E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Reviews */}
                  {/* Review 1 */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_dull_icon} alt="Star" className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Sarah M.</p>
                      <p className="text-xs text-gray-500">April 15, 2025</p>
                    </div>
                    <p className="mt-2">
                      This shampoo is amazing! My hair feels so soft and refreshed after using it. The cooling effect is a nice touch, especially after a long day. Highly recommend!
                    </p>
                  </div>
                  {/* Review 2 */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">John D.</p>
                      <p className="text-xs text-gray-500">April 10, 2025</p>
                    </div>
                    <p className="mt-2">
                      I've been using this product for a month, and I can already see a difference. My scalp feels cleaner, and my hair looks healthier. Definitely worth the price!
                    </p>
                  </div>
                  {/* Review 3 */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_dull_icon} alt="Star" className="w-4 h-4" />
                        <img src={assets.star_dull_icon} alt="Star" className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Emily R.</p>
                      <p className="text-xs text-gray-500">April 5, 2025</p>
                    </div>
                    <p className="mt-2">
                      The shampoo is decent, but I didn't feel the cooling effect as much as I expected. It cleans well, though, and my hair feels okay. Might try it again.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{productData.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
                <img src={assets.star_dull_icon} alt="Star" className="w-4 h-4" />
              </div>
              <p className="text-sm text-gray-600">(122)</p>
            </div>
          </div>
          <p className="text-gray-600">{productData.description}</p>

          {/* Pricing */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-600">Price:</p>
            <p className="text-2xl font-bold text-gray-900">${productData.price}</p>
          </div>

          {/* Stock and Category */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Stock:</span>{' '}
              {productData.stockStatus || 'In Stock'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Category:</span> {productData.category}
            </p>
            {productData.subCategory && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Subcategory:</span> {productData.subCategory}
              </p>
            )}
          </div>

          {/* Sizes */}
          {productData.sizes && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-900">Available Sizes:</p>
              <div className="flex gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md text-sm text-gray-700 transition ${
                      selectedSize === size
                        ? 'bg-gray-200 border-gray-400'
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            className="mt-4 w-full sm:w-1/2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
            disabled={productData.stockStatus !== 'In Stock'}
          >
            {productData.stockStatus === 'In Stock' ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Product Assurances */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700">100% original product</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700">Cash on delivery available</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm text-gray-700">Easy return and exchange within 7 days</p>
            </div>
          </div>

          {/* Benefits */}
          {productData.benefits && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-900">Key Benefits:</p>
              <div className="flex flex-wrap gap-2">
                {productData.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 shadow-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients */}
          {productData.ingredients && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-900">Ingredients:</p>
              <div className="flex flex-wrap gap-2">
                {productData.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 shadow-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empty Space */}
      <div className="mt-24"></div>
    </div>
  );
};

export default Product;
