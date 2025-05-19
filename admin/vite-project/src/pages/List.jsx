
// import React, { useEffect, useState } from 'react';
// import { backendUrl } from '../App';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const List = () => {
//   const [list, setList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//  const currency = '$'; // Hardcoded for now; ideally, fetch from Redux like in Product/ProductItem

//   // Fetch the product list with pagination
//   const fetchList = async (page = 1) => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('Please log in to access the product list.');
//         return;
//       }

//       const response = await axios.get(`${backendUrl}/api/product/admin/list`, {
//         params: { page, limit: 10 },
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const { products, pagination } = response.data;
//       setList(products);
//       setCurrentPage(pagination.currentPage);
//       setTotalPages(pagination.totalPages);
//     } catch (error) {
//       toast.error('Error fetching product list at ' + new Date().toISOString() + ': ' + (error.response?.data?.error || error.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Remove a product
//   const removeProduct = async (productId) => {
//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('Please log in to perform this action.');
//       return;
//     }

//     await axios.post(
//       `${backendUrl}/api/product/remove`,
//       { productId }, // Send productId in the request body
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setList(list.filter((product) => product._id !== productId));
//     toast.success('Product removed successfully');
//   } catch (error) {
//     toast.error(
//       'Error removing product at ' +
//         new Date().toISOString() +
//         ': ' +
//         (error.response?.data?.error || error.message)
//     );
//   }
// };

//   // Fetch products when the component mounts or the page changes
//   useEffect(() => {
//     fetchList(currentPage);
//   }, [currentPage]);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   // Function to get the price display for only one size (first size), removing .00 if present
//   const getPriceDisplay = (price, sizes) => {
//     if (!price || typeof price !== 'object' || !sizes || !Array.isArray(sizes) || sizes.length === 0) {
//       console.warn('Invalid price or sizes:', { price, sizes });
//       return `${currency}0`; // Fallback without .00
//     }

//     const defaultSize = sizes[0]; // Use the first size
//     if (price[defaultSize] && price[defaultSize].display) {
//       const displayValue = price[defaultSize].display; // e.g., "$55.00"
//       const value = price[defaultSize].value || 0; // e.g., 55
//       // If the value is a whole number, remove .00 from the display
//       if (Number.isInteger(value) && displayValue.endsWith('.00')) {
//         return ` ${displayValue.replace('.00', '')}`; // e.g., "S: $55"
//       }
//       return ` ${displayValue}`; // e.g., "S: $55.50" if not a whole number
//     }

//     const value = price[defaultSize]?.value || 0;
//     // Format the value directly, removing .00 if it's a whole number
//     const formattedValue = Number.isInteger(value) ? `${currency}${value}` : `${currency}${value.toFixed(2)}`;
//     return `${defaultSize}: ${formattedValue}`; // e.g., "S: $55" or "S: $55.50"
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">All Products List</h2>
//       {loading ? (
//         <p className="text-center text-gray-600 animate-pulse">Loading...</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto shadow-md rounded-lg">
//             <table className="min-w-full bg-white border-collapse">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//                   <th className="py-3 px-4 text-left">Image</th>
//                   <th className="py-3 px-4 text-left">Name</th>
//                   <th className="py-3 px-4 text-left">Category</th>
//                   <th className="py-3 px-4 text-left">Price</th>
//                   <th className="py-3 px-4 text-left">Benefits</th>
//                   <th className="py-3 px-4 text-left">Ingredients</th>
//                   <th className="py-3 px-4 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 {list.length > 0 ? (
//                   list.map((product) => (
//                     <tr
//                       key={product._id}
//                       className="border-b hover:bg-gray-50 transition-colors duration-200"
//                     >
//                       <td className="py-3 px-4">
//                         {product.image && product.image.length > 0 ? (
//                           <img
//                             src={product.image[0]}
//                             alt={product.name}
//                             className="w-12 h-12 object-cover rounded transition-opacity duration-300 hover:opacity-80"
//                           />
//                         ) : (
//                           <span className="text-gray-400">No Image</span>
//                         )}
//                       </td>
//                       <td className="py-3 px-4">{product.name}</td>
//                       <td className="py-3 px-4">{product.category}</td>
//                       <td className="py-3 px-4">
//                         <span className="text-sm text-gray-600">
//                           {getPriceDisplay(product.price, product.sizes)}
//                         </span>
//                       </td>
//                       <td className="py-3 px-4">
//                         <ul className="list-disc list-inside space-y-1">
//                           {product.benefits && product.benefits.length > 0 ? (
//                             product.benefits.map((benefit, index) => (
//                               <li key={index} className="text-sm text-gray-600">
//                                 {benefit.replace(/"/g, '')}
//                               </li>
//                             ))
//                           ) : (
//                             <li className="text-sm text-gray-400">No benefits</li>
//                           )}
//                         </ul>
//                       </td>
//                       <td className="py-3 px-4">
//                         <ul className="list-disc list-inside space-y-1">
//                           {product.ingredients && product.ingredients.length > 0 ? (
//                             product.ingredients.map((ingredient, index) => (
//                               <li key={index} className="text-sm text-gray-600">
//                                 {ingredient.replace(/"/g, '')}
//                               </li>
//                             ))
//                           ) : (
//                             <li className="text-sm text-gray-400">No ingredients</li>
//                           )}
//                         </ul>
//                       </td>
//                       <td className="py-3 px-4">
//                         <button
//                           className="text-red-500 hover:text-red-700 font-bold text-xl transition-colors duration-200"
//                           onClick={() => removeProduct(product._id)}
//                         >
//                           X
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="py-4 text-center text-gray-600">
//                       No products found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-center items-center gap-4 mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default List;
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const currency = '$'; // Hardcoded for now; ideally, fetch from Redux like in Product/ProductItem

  // Fetch all products
  const fetchList = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in to access the product list.');
        return;
      }

      const response = await axios.get(`${backendUrl}/api/product/admin/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { products } = response.data;
      const validProducts = Array.isArray(products) ? products : [];
      console.log('Fetched products in List.jsx:', validProducts.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        sizes: p.sizes
      })));
      setList(validProducts);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Error fetching product list at ' + new Date().toISOString() + ': ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  // Remove a product
  const removeProduct = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in to perform this action.');
        return;
      }

      await axios.post(
        `${backendUrl}/api/product/remove`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setList(list.filter((product) => product._id !== productId));
      toast.success('Product removed successfully');
    } catch (error) {
      toast.error(
        'Error removing product at ' +
          new Date().toISOString() +
          ': ' +
          (error.response?.data?.error || error.message)
      );
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to get the price display for the first size, removing .00 if present
  const getPriceDisplay = (price, sizes, productName) => {
    // Log for debugging
    console.log(`getPriceDisplay for ${productName}:`, { price, sizes });

    // Validate inputs
    if (!price || typeof price !== 'object') {
      console.warn(`Invalid price for ${productName}:`, price);
      return `${currency}0`;
    }

    // Use sizes array if provided, otherwise derive from price keys
    const availableSizes = Array.isArray(sizes) && sizes.length > 0 
      ? sizes 
      : Object.keys(price).filter(size => price[size] && typeof price[size].value === 'number');

    if (availableSizes.length === 0) {
      console.warn(`No valid sizes for ${productName}:`, { price, sizes });
      return `${currency}0`;
    }

    const defaultSize = availableSizes[0]; // Use first size (e.g., "S")
    const priceData = price[defaultSize];

    if (!priceData || typeof priceData.value !== 'number') {
      console.warn(`Invalid price data for size ${defaultSize} in ${productName}:`, priceData);
      return `${defaultSize}: ${currency}0`;
    }

    const { value, display } = priceData;
    // Use display field if available, otherwise format value
    const displayValue = display || `${currency}${value.toFixed(2)}`;
    // Remove .00 for whole numbers
    const formattedDisplay = Number.isInteger(value) && displayValue.endsWith('.00')
      ? displayValue.replace('.00', '')
      : displayValue;

    return ` ${formattedDisplay}`; // e.g., "S: $25"
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Products List</h2>
      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">Loading...</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Benefits</th>
                <th className="py-3 px-4 text-left">Ingredients</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {list.length > 0 ? (
                list.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4">
                      {product.image && product.image.length > 0 ? (
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded transition-opacity duration-300 hover:opacity-80"
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-600">
                        {getPriceDisplay(product.price, product.sizes, product.name)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        {product.benefits && product.benefits.length > 0 ? (
                          product.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              {benefit.replace(/"/g, '')}
                            </li>
                          ))
                        ) : (
                          <li className="text-sm text-gray-400">No benefits</li>
                        )}
                      </ul>
                    </td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        {product.ingredients && product.ingredients.length > 0 ? (
                          product.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              {ingredient.replace(/"/g, '')}
                            </li>
                          ))
                        ) : (
                          <li className="text-sm text-gray-400">No ingredients</li>
                        )}
                      </ul>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="text-red-500 hover:text-red-700 font-bold text-xl transition-colors duration-200"
                        onClick={() => removeProduct(product._id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-600">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default List;