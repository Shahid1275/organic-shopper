import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../redux/shopSlice';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, currency, cartItems } = useSelector((state) => state.shop);
  const [cartData, setCartData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (itemId, size, newQuantity) => {
    dispatch(updateQuantity({ itemId, size, quantity: parseInt(newQuantity) || 1 }));
  };

  const handleRemoveItem = (itemId, size) => {
    dispatch(removeFromCart({ itemId, size }));
    toast.success('Item removed from cart!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const openRemoveModal = (itemId, size) => {
    setItemToRemove({ itemId, size });
    setIsModalOpen(true);
  };

  const closeRemoveModal = () => {
    setIsModalOpen(false);
    setItemToRemove(null);
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      handleRemoveItem(itemToRemove.itemId, itemToRemove.size);
      closeRemoveModal();
    }
  };

  return (
    <div className="border-t pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-3xl font-semibold text-gray-900 mb-6">
          <Title text1="YOUR" text2="CART" />
        </div>
        <div
          className={`space-y-4 sm:space-y-6 transition-all duration-300 ${
            isModalOpen ? 'opacity-50' : ''
          }`}
        >
          {cartData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Your cart is empty.</p>
              <a
                href="/collection"
                className="mt-4 inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData || !productData.price || !productData.price[item.size]) {
                return null; // Skip rendering if product or price is missing
              }
              return (
                <div
                  key={`${item._id}-${item.size}`}
                  className="border-t border-b border-gray-200 py-4 sm:py-6 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-4 sm:gap-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <img
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-lg bg-gray-100 p-2"
                      src={productData.image && productData.image[0] ? productData.image[0] : assets.placeholder_image}
                      alt={`${productData.name} image`}
                    />
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                        {productData.name || 'Unnamed Product'}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base">
                        <p className="font-medium text-gray-700">
                          {currency}
                          {(productData.price[item.size].value || 0).toFixed(2)}
                        </p>
                        <p className="text-gray-600">Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      e.target.value === '' || e.target.value === '0'
                        ? openRemoveModal(item._id, item.size)
                        : handleQuantityChange(item._id, item.size, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-16 sm:w-20 md:w-24 transition text-sm sm:text-base"
                  />
                  <button
                    onClick={() => openRemoveModal(item._id, item.size)}
                    className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
                    aria-label={`Remove ${productData.name}, size ${item.size} from cart`}
                  >
                    <img src={assets.bin_icon} alt="Remove item" className="w-4 sm:w-5 h-4 sm:h-5" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Bootstrap Modal for confirming item removal */}
      {isModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Are you sure you want to remove this item(s) from your cart?
                </p>
              </div>
              <div className="modal-footer border-0 flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm sm:text-base font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  onClick={closeRemoveModal}
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm sm:text-base font-medium rounded-md border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                  onClick={confirmRemove}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="cursor-pointer bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;