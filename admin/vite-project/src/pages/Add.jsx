// import React, { useState } from 'react';
// import { backendUrl } from '../App';

// const Add = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     ingredients: [],
//     benefits: [],
//     stockStatus: 'In Stock',
//     price: { S: 0, M: 0, L: 0, XL: 0 },
//     image: [],
//     category: 'Shampoo',
//     subCategory: 'Haircare',
//     sizes: [],
//     bestseller: false,
//     reviews: [],
//   });

//   const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '', date: Date.now() });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleArrayInput = (e, field) => {
//     const values = e.target.value.split(',').map((item) => item.trim());
//     setFormData((prev) => ({ ...prev, [field]: values }));
//   };

//   const handlePriceChange = (size, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       price: { ...prev.price, [size]: Number(value) },
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, image: Array.from(e.target.files) }));
//   };

//   const handleSizeChange = (size) => {
//     setFormData((prev) => {
//       const sizes = prev.sizes.includes(size)
//         ? prev.sizes.filter((s) => s !== size)
//         : [...prev.sizes, size];
//       return { ...prev, sizes };
//     });
//   };

//   const handleBestsellerChange = () => {
//     setFormData((prev) => ({ ...prev, bestseller: !prev.bestseller }));
//   };

//   const handleReviewChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview((prev) => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
//   };

//   const addReview = () => {
//     setFormData((prev) => ({
//       ...prev,
//       reviews: [...prev.reviews, { ...newReview, date: Date.now() }],
//     }));
//     setNewReview({ name: '', rating: 5, comment: '', date: Date.now() });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token'); // Retrieve token from localStorage
//     if (!token) {
//       alert('No token found. Please log in again.');
//       window.location.href = '/'; // Redirect to login if token is missing
//       return;
//     }

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('description', formData.description);
//     data.append('ingredients', JSON.stringify(formData.ingredients));
//     data.append('benefits', JSON.stringify(formData.benefits));
//     data.append('stockStatus', formData.stockStatus);
//     data.append('price', JSON.stringify(formData.price));
//     formData.image.forEach((file, index) => {
//       data.append('image', file);
//     });
//     data.append('category', formData.category);
//     data.append('subCategory', formData.subCategory);
//     data.append('sizes', JSON.stringify(formData.sizes));
//     data.append('bestseller', formData.bestseller);
//     data.append('reviews', JSON.stringify(formData.reviews));

//     try {
//       const response = await fetch(`${backendUrl}/product/add`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include token in the Authorization header
//         },
//         body: data,
//       });
//       const result = await response.json();
//       if (result.success) {
//         alert('Product added successfully!');
//         setFormData({
//           name: '',
//           description: '',
//           ingredients: [],
//           benefits: [],
//           stockStatus: 'In Stock',
//           price: { S: 0, M: 0, L: 0, XL: 0 },
//           image: [],
//           category: 'Shampoo',
//           subCategory: 'Haircare',
//           sizes: [],
//           bestseller: false,
//           reviews: [],
//         });
//       } else {
//         alert('Failed to add product: ' + result.message);
//       }
//     } catch (error) {
//       alert('Error adding product: ' + error.message);
//       if (error.message.includes('401') || error.message.includes('Unauthorized')) {
//         alert('Session expired. Please log in again.');
//         localStorage.removeItem('token');
//         window.location.href = '/'; // Redirect to login on 401 Unauthorized
//       }
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             required
//           />
//         </div>

//         {/* Ingredients */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Ingredients (comma-separated)</label>
//           <input
//             type="text"
//             placeholder="e.g., Aloe Vera, Neem Extract"
//             onChange={(e) => handleArrayInput(e, 'ingredients')}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Benefits */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Benefits (comma-separated)</label>
//           <input
//             type="text"
//             placeholder="e.g., Fights dandruff, Soothes itchy scalp"
//             onChange={(e) => handleArrayInput(e, 'benefits')}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Stock Status */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Stock Status</label>
//           <select
//             name="stockStatus"
//             value={formData.stockStatus}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </div>

//         {/* Price */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price (by size)</label>
//           <div className="grid grid-cols-2 gap-4">
//             {['S', 'M', 'L', 'XL'].map((size) => (
//               <div key={size}>
//                 <label className="block text-sm text-gray-600">{size}</label>
//                 <input
//                   type="number"
//                   value={formData.price[size] || 0}
//                   onChange={(e) => handlePriceChange(size, e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   min="0"
//                   required
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Images (select up to 4)</label>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="Shampoo">Shampoo</option>
//             <option value="Soap">Soap</option>
//             <option value="Oil">Oil</option>
//             <option value="Cream">Cream</option>
//           </select>
//         </div>

//         {/* SubCategory */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">SubCategory</label>
//           <select
//             name="subCategory"
//             value={formData.subCategory}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="Face Care">Face Care</option>
//             <option value="Moisturizer">Moisturizer</option>
//             <option value="Skincare">Skincare</option>
//             <option value="Haircare">Haircare</option>
//           </select>
//         </div>

//         {/* Sizes */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Sizes</label>
//           <div className="flex gap-4">
//             {['S', 'M', 'L', 'XL'].map((size) => (
//               <label key={size} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={formData.sizes.includes(size)}
//                   onChange={() => handleSizeChange(size)}
//                 />
//                 {size}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Bestseller */}
//         <div>
//           <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//             <input
//               type="checkbox"
//               checked={formData.bestseller}
//               onChange={handleBestsellerChange}
//             />
//             Bestseller
//           </label>
//         </div>

//         {/* Reviews */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Add Review</label>
//           <div className="space-y-2">
//             <input
//               type="text"
//               name="name"
//               value={newReview.name}
//               onChange={handleReviewChange}
//               placeholder="Reviewer Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <select
//               name="rating"
//               value={newReview.rating}
//               onChange={handleReviewChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//             <textarea
//               name="comment"
//               value={newReview.comment}
//               onChange={handleReviewChange}
//               placeholder="Comment"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="2"
//             />
//             <button
//               type="button"
//               onClick={addReview}
//               className="py-1 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Add Review
//             </button>
//           </div>
//           {formData.reviews.length > 0 && (
//             <div className="mt-4">
//               <h4 className="text-sm font-medium text-gray-700">Added Reviews:</h4>
//               <ul className="list-disc pl-5">
//                 {formData.reviews.map((review, index) => (
//                   <li key={index}>
//                     {review.name} - {review.rating} stars: {review.comment}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;
import React from 'react'

const Add = () => {
  return (
    <div></div>
  )
}

export default Add