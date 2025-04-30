import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

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
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  const DescriptionAndReviews = () => (
    <div>
      <div className="flex gap-6 border-b border-gray-200">
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'description'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'reviews'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({productData.reviews?.length || 0})
        </button>
      </div>
      <div className="mt-6 text-sm leading-relaxed text-gray-600">
        {activeTab === 'description' ? (
          <div>
            <p>
              An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            </p>
            <p className="mt-4">
              E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {productData.reviews?.length > 0 ? (
              productData.reviews.map((review, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          src={star <= review.rating ? assets.star_icon : assets.star_dull_icon}
                          alt="Star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {productData.reviews?.length > 0 && (
              <button
                className="mt-4 w-full rounded-lg bg-gray-200 py-2 text-gray-900 hover:bg-gray-300 sm:w-1/2"
                onClick={() => alert('Load more reviews')}
              >
                See More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column: Product Images */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Thumbnail Images */}
            <div className="flex max-h-[500px] flex-row gap-3 overflow-x-auto pb-2 scrollbar-hide sm:flex-col sm:overflow-x-visible sm:overflow-y-auto sm:pb-0">
              {productData.image.map((img, index) => (
                <div
                  key={index}
                  className="relative h-16 w-16 flex-shrink-0 cursor-pointer rounded-lg sm:h-20 sm:w-20"
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${productData.name} thumbnail ${index + 1}`}
                    className="h-full w-full rounded-lg bg-white object-contain"
                  />
                  {mainImage === img && (
                    <div className="absolute inset-0 rounded-lg border-2 border-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="h-[400px] flex-1 overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md sm:h-[500px]">
              <img
                src={mainImage}
                alt={productData.name}
                className="h-full w-full object-contain p-4"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <DescriptionAndReviews />
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{productData.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={
                      star <= Math.round(productData.reviews?.reduce((acc, r) => acc + r.rating, 0) / (productData.reviews?.length || 1))
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    alt="Star"
                    className="h-4 w-4"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">({productData.reviews?.length || 0})</p>
            </div>
          </div>
          <p className="text-gray-600">{productData.description}</p>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-600">Price:</p>
            <p className="text-2xl font-bold text-gray-900">${productData.price}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Stock:</span> {productData.stockStatus}
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
          {productData.sizes && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-900">Available Sizes:</p>
              <div className="flex gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`rounded-md border px-4 py-2 text-sm text-gray-700 transition ${
                      selectedSize === size
                        ? 'border-gray-400 bg-gray-200'
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
          <button
            className="mt-4 w-full rounded-lg bg-gray-900 py-3 text-white transition hover:bg-gray-800 disabled:bg-gray-400 sm:w-1/2"
            disabled={productData.stockStatus !== 'In Stock'}
          >
            {productData.stockStatus === 'In Stock' ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <div className="flex flex-col gap-3">
            {['100% original product', 'Cash on delivery available', 'Easy return and exchange within 7 days'].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          {productData.benefits && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-900">Key Benefits:</p>
              <div className="flex flex-wrap gap-2">
                {productData.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700 shadow-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          )}
          {productData.ingredients && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-900">Ingredients:</p>
              <div className="flex flex-wrap gap-2">
                {productData.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700 shadow-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 lg:hidden">
        <DescriptionAndReviews />
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      <div className="mt-24"></div>
    </div>
  );
};

export default Product;