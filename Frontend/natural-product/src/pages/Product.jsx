import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import DescriptionAndReviews from './DescriptionAndReviews';
import { addToCart } from '../redux/shopSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

const Product = () => {
  const { productId } = useParams();
  const { products, user, currency } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      const sizes = product.sizes || Object.keys(product.price || {});
      setProductData({ ...product, sizes });
      setMainImage(product.image[0] || '');
      setSelectedSize(sizes[0] || '');
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (productData.stockStatus === 'In Stock' && selectedSize) {
      dispatch(addToCart({
        itemId: productData._id,
        size: selectedSize,
        price: getPriceForSize(selectedSize)
      }));
      toast.success('Item added to cart!');
    } else {
      toast.error('Please select a size or check stock availability.');
    }
  };

  const getPriceForSize = (size) => {
    if (!productData.price || !productData.price[size]) return 0;
    return productData.price[size].value || Number(productData.price[size].display) || 0;
  };

  const formatPriceWithCurrency = (price, sizes) => {
    if (!price || typeof price !== 'object') {
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

  const getCurrentPrice = () => {
    const size = selectedSize || productData.sizes?.[0] || 'S';
    if (!productData.price || !productData.price[size]) {
      return `${currency}0.00`;
    }
    const value = getPriceForSize(size);
    return `${currency}${value.toFixed(2)}`;
  };

  if (!productData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  const formattedPrice = formatPriceWithCurrency(productData.price, productData.sizes);
  const currentPrice = getCurrentPrice();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row">
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
            <div className="h-[400px] flex-1 overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md sm:h-[500px]">
              <img
                src={mainImage}
                alt={productData.name}
                className="h-full w-full object-contain p-4"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <DescriptionAndReviews
              productId={productId}
              description={productData.description}
              user={user}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{productData.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>☆</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">(0)</p>
            </div>
          </div>
          <p className="text-gray-600">{productData.description}</p>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-600">Price:</p>
            <p className="text-2xl font-bold text-gray-900">{currentPrice}</p>
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
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`flex flex-col items-center rounded-md border px-4 py-2 text-sm text-gray-700 transition ${
                      selectedSize === size
                        ? 'border-gray-400 bg-gray-200'
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <span>{size}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            className="mt-4 w-full rounded-lg bg-gray-900 py-3 text-white transition hover:bg-gray-800 disabled:bg-gray-400 sm:w-1/2"
            disabled={productData.stockStatus !== 'In Stock' || !selectedSize}
            onClick={handleAddToCart}
          >
            {productData.stockStatus === 'In Stock' ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <div className="flex flex-col gap-3">
            {['100% original product', 'Cash on delivery available', 'Easy return and exchange within 7 days'].map(
              (text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-gray-700">{text}</p>
                </div>
              )
            )}
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
        <DescriptionAndReviews
          productId={productId}
          description={productData.description}
          user={user}
        />
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      <div className="mt-24"></div>
    </div>
  );
};

export default Product;