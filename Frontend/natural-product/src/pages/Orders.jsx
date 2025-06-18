// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import Title from '../components/Title';

// const Orders = () => {
//   const { backendUrl, token, currency } = useSelector((state) => state.shop);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     if (!token) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }
    
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         `${backendUrl}/api/order/userorders`,
//         { userId: token.userId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         let allOrderItems = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             item['status'] = order.status;
//             item['payment'] = order.payment;
//             item['paymentMethod'] = order.paymentMethod;
//             item['date'] = order.date;
//             allOrderItems.push(item);
//           })
//         })
//         setOrders(allOrderItems.reverse());
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [token]);

//   const formatDate = (timestamp) => {
//     if (!timestamp) return 'Date not available';
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   const formatPriceWithCurrency = (price, size = 'M') => {
//     if (!price || typeof price !== 'object' || !price[size]) {
//       return `${currency}0.00`;
//     }
//     const value = Number(price[size].value || price[size].display || 0);
//     return `${currency}${value.toFixed(2)}`;
//   };

//   if (loading) {
//     return (
//       <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="text-2xl mb-8">
//           <Title text1={'MY'} text2={'ORDERS'} />
//         </div>
//         <div className="flex justify-center items-center h-64">
//           <p>Loading your orders...</p>
//         </div>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="text-2xl mb-8">
//           <Title text1={'MY'} text2={'ORDERS'} />
//         </div>
//         <div className="flex justify-center items-center h-64">
//           <p>You haven't placed any orders yet.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
//       <div className="text-xl mb-6 flex items-center">
//         <h2 className="font-semibold">MY ORDERS</h2>
//         <span className="ml-2 text-gray-400">—</span>
//       </div>
//       <div className="space-y-4">
//         {orders.map((order) => (
//           <div key={order._id} className="border rounded-lg overflow-hidden">
//             {order.items.map((item) => (
//               <div key={`${order._id}-${item.itemId}-${item.size}`} className="p-4 flex items-center border-b last:border-b-0">
//                 <div className="w-20 h-20 flex-shrink-0">
//                   <img
//                     className="w-full h-full object-cover rounded-lg"
//                     src={item.productDetails.image?.[0] || '/placeholder-product.jpg'}
//                     alt={item.productDetails.name || 'Product'}
//                     loading="lazy"
//                     onError={(e) => { e.target.src = '/placeholder-product.jpg'; }}
//                   />
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <h3 className="text-lg font-semibold">{item.productDetails.name || 'Unnamed Product'}</h3>
//                   <div className="text-gray-600 space-y-1 text-sm">
//                     <p>{formatPriceWithCurrency(item.productDetails.price, item.size)} Quantity: {item.quantity} Size: {item.size}</p>
//                     <p>Date: {formatDate(order.date)}</p>
//                     <p>Payment: {order.paymentMethod === 'cod' ? 'COD' : 'Stripe'}</p>
//                   </div>
//                 </div>
//                 <div className="ml-4 flex-shrink-0 flex flex-col items-center">
//                   <span className="text-green-600 text-sm">✔ {item.status || 'Order Placed'}</span>
//                   <button
//                     onClick={() => updateOrderStatus(order._id, item.itemId)}
//                     className="mt-2 px-4 py-1 bg-gray-200 text-gray-700 rounded text-sm"
//                   >
//                     Track Order
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Title from '../components/Title';

const Orders = () => {
  const { backendUrl, token, currency } = useSelector((state) => state.shop);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    if (!token) {
      setOrders([]);
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        { userId: token.userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrderItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
              orderId: order._id // Add order ID to each item
            });
          });
        });
        setOrders(allOrderItems.reverse());
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Date not available';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatPriceWithCurrency = (price, size = 'M') => {
    if (!price || typeof price !== 'object' || !price[size]) {
      return `${currency}0.00`;
    }
    const value = Number(price[size].value || price[size].display || 0);
    return `${currency}${value.toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-2xl mb-8">
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>
        <div className="flex justify-center items-center h-64">
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-2xl mb-8">
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>
        <div className="flex justify-center items-center h-64">
          <p>You haven't placed any orders yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-xl mb-6 flex items-center">
        <h2 className="font-semibold">MY ORDERS</h2>
        <span className="ml-2 text-gray-400">—</span>
      </div>
      <div className="space-y-4">
        {orders.map((item) => (
          <div key={`${item.orderId}-${item.itemId}-${item.size}`} className="border rounded-lg overflow-hidden p-4">
            <div className="flex items-center">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.productDetails?.image?.[0] || '/placeholder-product.jpg'}
                  alt={item.productDetails?.name || 'Product'}
                  loading="lazy"
                  onError={(e) => { e.target.src = '/placeholder-product.jpg'; }}
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.productDetails?.name || 'Unnamed Product'}</h3>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p>{formatPriceWithCurrency(item.productDetails?.price, item.size)} • Quantity: {item.quantity} • Size: {item.size}</p>
                  <p>Date: {formatDate(item.date)}</p>
                  <p>Payment: {item.paymentMethod === 'cod' ? 'COD' : 'Stripe'} • Status: {item.status}</p>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button onClick={fetchOrders}
                  className="px-4 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;