import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Add = () => {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [bestseller, setBestseller] = useState(false);
    const [size, setSize] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [benefits, setBenefits] = useState('');
   
  

  return (
    <form className="max-w-4xl mx-auto p-4 bg-white rounded-lg  ml-6 md:ml-12">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Product</h2>

      {/* Image Upload Section */}
      <section className="mb-4">
        <h3 className="mb-2 font-medium text-gray-700 text-sm">Upload Product Images</h3>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4].map((num) => (
            <label
              key={num}
              htmlFor={`image${num}`}
              className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors sm:w-20 sm:h-20"
            >
              <img
                className="w-10 opacity-60 sm:w-8"
                src={assets.upload_area}
                alt={`Upload area for image ${num}`}
              />
              <span className="text-xs text-gray-500 mt-1 sm:text-[10px]">Image {num}</span>
              <input
                type="file"
                id={`image${num}`}
                name={`image${num}`}
                className="hidden"
                accept="image/*"
                required={num === 1} // At least one image is required
              />
            </label>
          ))}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name (e.g., Men Volumizing Shampoo)"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          />
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          >
            <option value="">Select category</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Soap">Soap</option>
            <option value="Oil">Oil</option>
            <option value="Cream">Cream</option>
          </select>
        </div>

        {/* Product Sub-Category */}
        <div>
          <label htmlFor="subCategory" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Product Sub-Category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          >
            <option value="">Select sub-category</option>
            <option value="Haircare">Haircare</option>
            <option value="Skincare">Skincare</option>
            <option value="Moisturizer">Moisturizer</option>
            <option value="Face Care">Face Care</option>
          </select>
        </div>

        {/* Stock Status */}
        <div>
          <label htmlFor="stockStatus" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Stock Status
          </label>
          <select
            id="stockStatus"
            name="stockStatus"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          >
            <option value="">Select status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Low Stock">Low Stock</option>
          </select>
        </div>

        {/* Bestseller */}
        <div>
          <label htmlFor="bestseller" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Bestseller
          </label>
          <select
            id="bestseller"
            name="bestseller"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          >
            <option value="">Select option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Sizes */}
        <div>
          <label htmlFor="sizes" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
            Size
          </label>
          <select
            id="sizes"
            name="sizes"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
            required
          >
            <option value="">Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </section>

      {/* Price Section */}
      <section className="mb-4 grid grid-cols-4 gap-4 sm:grid-cols-2">
        {["S", "M", "L", "XL"].map((size) => (
          <div key={size}>
            <label htmlFor={`price${size}`} className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
              Price ({size})
            </label>
            <input
              id={`price${size}`}
              name={`price${size}`}
              type="number"
              placeholder="0.00"
              step="1.00"
              min="5"
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
              required
            />
          </div>
        ))}
      </section>

      {/* Ingredients */}
      <section className="mb-4">
        <label htmlFor="ingredients" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Ingredients
        </label>
        <input
          id="ingredients"
          name="ingredients"
          type="text"
          placeholder="Enter ingredients (e.g., Biotin, Caffeine, Peppermint Oil)"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
        />
      </section>

      {/* Benefits */}
      <section className="mb-4">
        <label htmlFor="benefits" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Benefits
        </label>
        <input
          id="benefits"
          name="benefits"
          type="text"
          placeholder="Enter benefits (e.g., Adds volume, Reduces thinning)"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
        />
      </section>

      {/* Description */}
      <section className="mb-4">
        <label htmlFor="description" className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">
          Product Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Enter detailed product description (e.g., A specially formulated shampoo for men...)"
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
          required
        />
      </section>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-5 py-1 bg-blue-600 text-white font-medium rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors text-sm sm:text-xs"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Add;
// import React from "react";
// import { assets } from "../assets/assets";

// const Add = () => {

//   return (
//     <form  className="max-w-4xl mx-auto p-4 bg-white rounded-lg ml-6 md:ml-12">
//       <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Product</h2>

//       {/* Image Upload Section */}
//       <div className="mb-4">
//         <p className="mb-2 font-medium text-gray-700">Upload Product Images</p>
//         <div className="flex flex-wrap gap-3">
//           {[1, 2, 3, 4].map((num) => (
//             <label
//               key={num}
//               htmlFor={`image${num}`}
//               className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors sm:w-20 sm:h-20"
//             >
//               <img
//                 className="w-10 opacity-60 sm:w-8"
//                 src={assets.upload_area}
//                 alt={`upload area ${num}`}
//               />
//               <span className="text-xs text-gray-500 mt-1 sm:text-[10px]">Image {num}</span>
//               <input
//                 type="file"
//                 id={`image${num}`}
//                 className="hidden"
//                 accept="image/*"
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//         {/* Product Name */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Product Name</label>
//           <input required
//             type="text"
//             placeholder="Enter product name (e.g., Herbal Anti-Dandruff Shampoo)"
//             className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//           />
//         </div>

//         {/* Product Category */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Product Category</label>
//           <select required className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs">
//             <option value="">Select category</option>
//             <option value="Shampoo">Shampoo</option>
//             <option value="Soap">Soap</option>
//             <option value="Oil">Oil</option>
//             <option value="Cream">Cream</option>
//           </select>
//         </div>

//         {/* Product Sub-Category */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Product Sub-Category</label>
//           <select required className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs">
//             <option value="">Select sub-category</option>
//             <option value="Haircare">Haircare</option>
//             <option value="Skincare">Skincare</option>
//             <option value="Moisturizer">Moisturizer</option>
//             <option value="Face Care">Face Care</option>
//           </select>
//         </div>

//         {/* Stock Status */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Stock Status</label>
//           <select required className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs">
//             <option value="">Select status</option>
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//             <option value="Low Stock">Low Stock</option>
//           </select>
//         </div>

//         {/* Bestseller */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Bestseller</label>
//           <select required className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs">
//             <option value="">Select option</option>
//             <option value="true">Yes</option>
//             <option value="false">No</option>
//           </select>
//         </div>

//         {/* Sizes */}
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Sizes</label>
//           <select required className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs">
//             <option value="">Select size</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//         </div>
//       </div>

//       {/* Price Section */}
//       <div className="mb-4 grid grid-cols-4 gap-4 sm:grid-cols-2">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Price (S)</label>
//           <input required
//             type="number"
//             placeholder="0.00"
//             step="1.00"
//             min="5"
//             className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Price (M)</label>
//           <input
//             type="number" required
//             placeholder="0.00"
//              step="1.00"
//             min="5"
//             className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Price (L)</label>
//           <input
//             type="number" required
//             placeholder="0.00"
//              step="1.00"
//             min="5"
//             className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Price (XL)</label>
//           <input
//             type="number" required
//             placeholder="0.00"
//              step="1.00"
//             min="5"
//             className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//           />
//         </div>
//       </div>

//       {/* Ingredients */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Ingredients</label>
//         <input required
//           type="text"
//           placeholder="Enter ingredients (e.g., Aloe Vera, Neem Extract, Tea Tree Oil)"
//           className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//         />
//       </div>

//       {/* Benefits */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Benefits</label>
//         <input required
//           type="text"
//           placeholder="Enter benefits (e.g., Fights dandruff, Soothes itchy scalp)"
//           className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//         />
//       </div>

//       {/* Description */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium text-gray-700 text-sm sm:text-xs">Product Description</label>
//         <textarea required
//           rows={2}
//           placeholder="Enter detailed product description (e.g., A refreshing shampoo...)"
//           className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-xs"
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button 
//           type="submit"
//           className="px-5 py-1 bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors text-sm sm:text-xs"
//         >
//           Add Product
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Add;