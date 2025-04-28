import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useSelector((state) => state.shop);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Options */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">FILTERS</p>
            <img src={assets.dropdown_icon} alt="Toggle filters" />
          </div>
          <div className={`border p-4 mt-2 ${showFilter ? '' : 'hidden'}`}>
            <p className="font-semibold mb-2">Categories</p>
            <div>
              <p>
                <input type="checkbox" value="Men" /> Men
              </p>
              <p>
                <input type="checkbox" value="Women" /> Women
              </p>
              <p>
                <input type="checkbox" value="Kids" /> Kids
              </p>
            </div>
            {/* Subcategory */}
            <p className="font-semibold mb-2 mt-4">Subcategories</p>
            <div>
              <p>
                <input type="checkbox" value="Shampoo" /> Shampoo
              </p>
              <p>
                <input type="checkbox" value="Soaps" /> Soaps
              </p>
              <p>
                <input type="checkbox" value="Skincare & Haircare" /> Skin & Hair
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <Title text1="ALL" text2="COLLECTIONS" />
            <select className="border p-2 rounded-lg">
              <option value="relevant">Sort by: Relevant</option>
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;