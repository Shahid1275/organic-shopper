import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
     const { search, showSearch } = useSelector((state) => state.shop);
     const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategories(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    let productsCopy = [...products];
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    // Filter by category (convert checkbox values to match product categories)
    if (categories.length > 0) {
      const categoryMap = {
        'SHAMPOO': 'Shampoo',
        'SOAPS': 'Soap',
        'OILS': 'Oil',
        'CREAMS': 'Cream'
      };
      
      productsCopy = productsCopy.filter(item => 
        categories.some(cat => item.category === categoryMap[cat])
      );
    }

    // Filter by subcategory
    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter(item => 
        subCategories.includes(item.subCategory)
      );
    }

    // Apply sorting
    switch (sortType) {
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredProducts(productsCopy);
  }, [products, categories, subCategories, sortType ,search,showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Filter Options */} 
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
        {/* Category Options */}
        <div className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${showFilter ? '' : 'hidden'} sm:block bg-gray-100`}>
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
        {/* Subcategory Options */}
        <div className={`border border-gray-200 rounded-md pl-5 py-4 mt-6 ${showFilter ? '' : 'hidden'} sm:block bg-gray-100`}>
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
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product Sort */}
          <select 
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-200 rounded-md p-2 text-sm bg-white transition-all"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="low-high">Sort by: Low to High</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {filteredProducts.map((item, index) => (
            <ProductItem 
              key={item._id} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;