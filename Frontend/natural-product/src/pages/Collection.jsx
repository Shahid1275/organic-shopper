// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import fetchProducts  from '../redux/shopSlice'; // Adjust path as needed
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const dispatch = useDispatch();
//   const {
//     search = '',
//     showSearch = false,
//     currency = '$',
//     products = [],
//     loading = false,
//     error = null,
//   } = useSelector((state) => state.shop || {});

//   const [showFilter, setShowFilter] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [sortType, setSortType] = useState('relevant');

//   // Fetch products on mount
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const toggleCategory = (e) => {
//     const value = e.target.value;
//     setCategories((prev) =>
//       prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//     );
//   };

//   const toggleSubCategory = (e) => {
//     const value = e.target.value;
//     setSubCategories((prev) =>
//       prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//     );
//   };

//   useEffect(() => {
//     let productsCopy = products.map((product) => ({
//       ...product,
//       sizes: product.sizes || Object.keys(product.price || {}),
//     }));

//     // Search filter
//     if (showSearch && search) {
//       productsCopy = productsCopy.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (categories.length > 0) {
//       const categoryMap = {
//         SHAMPOO: 'Shampoo',
//         SOAPS: 'Soap',
//         OILS: 'Oil',
//         CREAMS: 'Cream',
//       };
//       productsCopy = productsCopy.filter((item) =>
//         categories.some((cat) => item.category === categoryMap[cat])
//       );
//     }

//     // Filter by subcategory
//     if (subCategories.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         subCategories.includes(item.subCategory)
//       );
//     }

//     // Sorting and display logic
//     if (sortType === 'low-high') {
//       productsCopy.sort((a, b) => {
//         const priceA = a.price['S']?.value || 0;
//         const priceB = b.price['S']?.value || 0;
//         return priceA - priceB;
//       });
//       productsCopy = productsCopy.map((product) => ({
//         ...product,
//         displaySize: 'S',
//       }));
//     } else if (sortType === 'high-low') {
//       productsCopy.sort((a, b) => {
//         const priceA = a.price['S']?.value || 0;
//         const priceB = b.price['S']?.value || 0;
//         return priceB - priceA;
//       });
//       productsCopy = productsCopy.map((product) => ({
//         ...product,
//         displaySize: 'S',
//       }));
//     } else {
//       productsCopy = productsCopy.map((product) => ({
//         ...product,
//         displaySize: product.sizes[0] || 'S',
//       }));
//     }

//     // Format prices with currency
//     productsCopy = productsCopy.map((product) => ({
//       ...product,
//       price: formatPriceWithCurrency(product.price, product.sizes),
//     }));

//     setFilteredProducts(productsCopy);
//   }, [products, categories, subCategories, sortType, search, showSearch]);

//   // Function to format price with currency from Redux
//   const formatPriceWithCurrency = (price, sizes) => {
//     if (!price || typeof price !== 'object') {
//       console.warn('Invalid price format in Collection:', price);
//       return { S: { display: `${currency}0.00`, value: 0 } };
//     }

//     const formattedPrice = {};
//     sizes.forEach((size) => {
//       if (price[size]) {
//         const value = Number(price[size].value || price[size].display || 0);
//         formattedPrice[size] = {
//           display: `${currency}${value.toFixed(2)}`,
//           value,
//         };
//       }
//     });

//     return formattedPrice;
//   };

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 p-6 sm:p-10 bg-gray-50 min-h-screen">
//       <div className="min-w-64 bg-white rounded-lg p-6">
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className="my-2 text-2xl font-semibold flex items-center cursor-pointer gap-3 text-gray-800 hover:text-indigo-600 transition-colors"
//         >
//           FILTERS
//           <img
//             className={`h-4 sm:hidden ${showFilter ? 'rotate-90' : ''} transition-transform`}
//             src={assets.dropdown_icon}
//             alt="drop down"
//           />
//         </p>
//         <div
//           className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${
//             showFilter ? '' : 'hidden'
//           } sm:block bg-gray-100`}
//         >
//           <p className="mb-4 text-sm font-bold text-gray-900 uppercase">Categories</p>
//           <div className="flex flex-col gap-3 text-sm text-gray-700">
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="SHAMPOO"
//                 checked={categories.includes('SHAMPOO')}
//                 onChange={toggleCategory}
//               />
//               Shampoo
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="SOAPS"
//                 checked={categories.includes('SOAPS')}
//                 onChange={toggleCategory}
//               />
//               Soaps
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="OILS"
//                 checked={categories.includes('OILS')}
//                 onChange={toggleCategory}
//               />
//               Oils
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="CREAMS"
//                 checked={categories.includes('CREAMS')}
//                 onChange={toggleCategory}
//               />
//               Creams
//             </label>
//           </div>
//         </div>
//         <div
//           className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${
//             showFilter ? '' : 'hidden'
//           } sm:block bg-gray-100`}
//         >
//           <p className="mb-4 text-sm font-bold text-gray-900 uppercase">Type</p>
//           <div className="flex flex-col gap-3 text-sm text-gray-700">
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="Face Care"
//                 checked={subCategories.includes('Face Care')}
//                 onChange={toggleSubCategory}
//               />
//               Face Care
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="Moisturizer"
//                 checked={subCategories.includes('Moisturizer')}
//                 onChange={toggleSubCategory}
//               />
//               Moisturizer
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="Skincare"
//                 checked={subCategories.includes('Skincare')}
//                 onChange={toggleSubCategory}
//               />
//               Skincare
//             </label>
//             <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//                 value="Haircare"
//                 checked={subCategories.includes('Haircare')}
//                 onChange={toggleSubCategory}
//               />
//               Haircare
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1">
//         {loading && (
//           <div className="text-center text-gray-600 animate-pulse">Loading collections...</div>
//         )}
//         {error && (
//           <div className="text-center text-red-600">Error: {error}</div>
//         )}
//         {!loading && !error && (
//           <>
//             <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
//               <Title text1="ALL" text2="COLLECTIONS" />
//               <select
//                 onChange={(e) => setSortType(e.target.value)}
//                 className="border-2 border-gray-200 rounded-md p-2 text-sm bg-white transition-all"
//               >
//                 <option value="relevant">Sort by: Relevant</option>
//                 <option value="low-high">Sort by: Low to High</option>
//                 <option value="high-low">Sort by: High to Low</option>
//               </select>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((item) => (
//                   <ProductItem
//                     key={item._id}
//                     id={item._id}
//                     image={item.image || ['/placeholder-image.jpg']}
//                     name={item.name}
//                     price={item.price}
//                     sizes={item.sizes}
//                     displaySize={item.displaySize}
//                   />
//                 ))
//               ) : (
//                 <div className="col-span-full text-center text-gray-600">No products found</div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../redux/shopSlice';

const Collection = () => {
  const dispatch = useDispatch();
  const {
    search = '',
    showSearch = false,
    currency = 'USD',
    products = [],
    loading = false,
    error = null,
    conversionRates = {},
  } = useSelector((state) => state.shop || {});

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // No need to dispatch fetchProducts since products are hardcoded
 useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);// Empty dependency array since no API call

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    let productsCopy = products.map((product) => ({
      ...product,
      sizes: product.sizes || Object.keys(product.price || {}),
    }));

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (categories.length > 0) {
      const categoryMap = {
        SHAMPOO: 'Shampoo',
        SOAPS: 'Soap',
        OILS: 'Oil',
        CREAMS: 'Cream',
      };
      productsCopy = productsCopy.filter((item) =>
        categories.some((cat) => item.category === categoryMap[cat])
      );
    }

    // Filter by subcategory
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }

    // Sorting and display logic
    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => {
        const priceA = (a.price['S']?.value || 0) * (conversionRates[currency] || 1);
        const priceB = (b.price['S']?.value || 0) * (conversionRates[currency] || 1);
        return priceA - priceB;
      });
      productsCopy = productsCopy.map((product) => ({
        ...product,
        displaySize: 'S',
      }));
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => {
        const priceA = (a.price['S']?.value || 0) * (conversionRates[currency] || 1);
        const priceB = (b.price['S']?.value || 0) * (conversionRates[currency] || 1);
        return priceB - priceA;
      });
      productsCopy = productsCopy.map((product) => ({
        ...product,
        displaySize: 'S',
      }));
    } else {
      productsCopy = productsCopy.map((product) => ({
        ...product,
        displaySize: product.sizes[0] || 'S',
      }));
    }

    // Format prices with original and converted amounts
    productsCopy = productsCopy.map((product) => ({
      ...product,
      price: formatPriceWithConversion(product.price, product.sizes, currency, conversionRates),
    }));

    setFilteredProducts(productsCopy);
  }, [products, categories, subCategories, sortType, search, showSearch, currency, conversionRates]);

  // Function to format price with original and converted amounts
  const formatPriceWithConversion = (price, sizes, selectedCurrency, rates) => {
    if (!price || typeof price !== 'object') {
      console.warn('Invalid price format in Collection:', price);
      return { S: { display: 'USD 0.00 * 1 = USD 0.00', value: 0 } };
    }

    const baseCurrency = 'USD';
    const formattedPrice = {};
    sizes.forEach((size) => {
      if (price[size]) {
        const baseValue = Number(price[size].value || price[size].display || 0);
        const conversionRate = rates[selectedCurrency] || 1;
        const convertedValue = baseValue * conversionRate;
        formattedPrice[size] = {
          display: ` ${selectedCurrency} ${convertedValue.toFixed(2)}`,
          value: baseValue,
        };
      }
    });

    return formattedPrice;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 p-6 sm:p-10 bg-gray-50 min-h-screen">
      <div className="min-w-64 bg-white rounded-lg p-6">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-2xl font-semibold flex items-center cursor-pointer gap-3 text-gray-800 hover:text-indigo-600 transition-colors"
        >
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? 'rotate-90' : ''} transition-transform`}
            src={assets.dropdown_icon}
            alt="drop down"
          />
        </p>
        <div
          className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block bg-gray-100`}
        >
          <p className="mb-4 text-sm font-bold text-gray-900 uppercase">Categories</p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="SHAMPOO"
                checked={categories.includes('SHAMPOO')}
                onChange={toggleCategory}
              />
              Shampoo
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="SOAPS"
                checked={categories.includes('SOAPS')}
                onChange={toggleCategory}
              />
              Soaps
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="OILS"
                checked={categories.includes('OILS')}
                onChange={toggleCategory}
              />
              Oils
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="CREAMS"
                checked={categories.includes('CREAMS')}
                onChange={toggleCategory}
              />
              Creams
            </label>
          </div>
        </div>
        <div
          className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block bg-gray-100`}
        >
          <p className="mb-4 text-sm font-bold text-gray-900 uppercase">Type</p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="Face Care"
                checked={subCategories.includes('Face Care')}
                onChange={toggleSubCategory}
              />
              Face Care
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="Moisturizer"
                checked={subCategories.includes('Moisturizer')}
                onChange={toggleSubCategory}
              />
              Moisturizer
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="Skincare"
                checked={subCategories.includes('Skincare')}
                onChange={toggleSubCategory}
              />
              Skincare
            </label>
            <label className="flex gap-3 items-center cursor-pointer hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                value="Haircare"
                checked={subCategories.includes('Haircare')}
                onChange={toggleSubCategory}
              />
              Haircare
            </label>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {loading && (
          <div className="text-center text-gray-600 animate-pulse">Loading collections...</div>
        )}
        {error && (
          <div className="text-center text-red-600">Error: {error}</div>
        )}
        {!loading && !error && (
          <>
            <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
              <Title text1="ALL" text2="COLLECTIONS" />
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border-2 border-gray-200 rounded-md p-2 text-sm bg-white transition-all"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <ProductItem
                    key={item._id}
                    id={item._id}
                    image={item.image || ['/placeholder-image.jpg']}
                    name={item.name}
                    price={item.price}
                    sizes={item.sizes}
                    displaySize={item.displaySize}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-600">No products found</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Collection;