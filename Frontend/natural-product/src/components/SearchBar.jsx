import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, setShowSearch } from '../redux/shopSlice';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, showSearch } = useSelector((state) => state.shop);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (showSearch) {
            dispatch(setSearch(''));
        }
        if (location.pathname.includes('collection') && showSearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location ,showSearch]);
    // Clear search input whenever the search bar is shown
   

    return showSearch && visible ? (
        <div className='border-t border-gray-50 border-b text-center relative'>
            <div className='inline-flex items-center justify-between border border-gray-400 rounded-full px-5 py-2 my-3 mx-5 w-3/4 sm:w-1/2 relative'>
                <input 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search..' 
                    value={search} 
                    onChange={(e) => dispatch(setSearch(e.target.value))} 
                />
                <img 
                    src={assets.cross_icon} 
                    className='w-4 h-4 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2' 
                    onClick={() => dispatch(setShowSearch(false))} 
                    alt="Close search" 
                />
            </div>
        </div>
    ) : null;
}

export default SearchBar;
