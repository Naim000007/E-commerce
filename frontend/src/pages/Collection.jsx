import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search = '', showSearch = false } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [sortOption, setSortOption] = useState('relevant');

    // Toggle category filter
    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    // Toggle subcategory filter
    const toggleSubcategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    // Apply filters based on category, subcategory, and search
    const applyFilter = () => {
        let productsCopy = [...products];

        // Convert search to a string before calling toLowerCase()
        const searchValue = String(search || '').toLowerCase().trim();

        if (showSearch && searchValue !== '') {
            productsCopy = productsCopy.filter(item =>
                item.name.toLowerCase().includes(searchValue)
            );
        }

        // Apply category filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        // Apply subcategory filter
        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    // Apply sorting
    const sortedProducts = [...filterProducts].sort((a, b) => {
        if (sortOption === 'low-high') {
            return a.price - b.price;
        } else if (sortOption === 'high-low') {
            return b.price - a.price;
        } else {
            return 0; // Default sorting (relevant)
        }
    });

    // Update filtered products when dependencies change
    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category, subcategory, products, search, showSearch]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Section */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`}
                        src={assets.dropdown_icon || ""}
                        alt="dropdown icon"
                    />
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Men', 'Women', 'Kids'].map((cat) => (
                            <label key={cat} className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={cat} onChange={toggleCategory} />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
                            <label key={sub} className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={sub} onChange={toggleSubcategory} />
                                {sub}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Listing Section */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTION'} />
                    <select
                        className='border-2 border-gray-200 text-sm px-2'
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value='relevant'>Sort by: Relevant</option>
                        <option value='low-high'>Sort by: Low to High Price</option>
                        <option value='high-low'>Sort by: High to Low Price</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                name={item.name}
                                id={item._id}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center w-full col-span-4">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collection;
