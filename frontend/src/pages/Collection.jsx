import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [sortOption, setSortOption] = useState('relavent');

    // Toggle category filter
    const toggleCategory = (e) => {
        const value = e.target.value;
        if (value) {
            if (category.includes(value)) {
                setCategory(prev => prev.filter(item => item !== value));
            } else {
                setCategory(prev => [...prev, value]);
            }
        }
    };

    // Toggle subcategory filter
    const toggleSubcategory = (e) => {
        const value = e.target.value;
        if (value) {
            if (subcategory.includes(value)) {
                setSubCategory(prev => prev.filter(item => item !== value));
            } else {
                setSubCategory(prev => [...prev, value]);
            }
        }
    };

    // Apply filters based on category and subcategory
    const applyFilter = () => {
        let productsCopy = products.slice();

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory)); // Use subCategory
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
            return 0; // No sorting or relevant sorting
        }
    });

    // Update filtered products when products, category, or subcategory change
    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category, subcategory, products]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Section */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`}
                        src={assets.dropdown_icon}
                        alt="dropdown icon"
                    />
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Men' onChange={toggleCategory} />
                            Men
                        </p>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Women' onChange={toggleCategory} />
                            Women
                        </p>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Kids' onChange={toggleCategory} />
                            Kids
                        </p>
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Topwear' onChange={toggleSubcategory} /> Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Bottomwear' onChange={toggleSubcategory} /> Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input type='checkbox' className='w-3' value='Winterwear' onChange={toggleSubcategory} /> Winterwear
                        </p>
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
                        <option value='relavent'>Sort by: Relavent</option>
                        <option value='low-high'>Sort by: Low to High Price</option>
                        <option value='high-low'>Sort by: High to Low Price</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {sortedProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            name={item.name}
                            id={item._id}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;