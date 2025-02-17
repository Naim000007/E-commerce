import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={assets.contact_img}
                        alt="Forever Store"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2 p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">CONTACT US</h1>

                    <div className="mb-8">
                        <h2 className="text-xl md:text-xl font-semibold text-gray-700 mb-2">Our Store</h2>
                        <p className="text-gray-600">Bashundhara, Dhaka</p>
                        <p className="text-gray-600">Basundhara R/A, abdus sadek road, Dhaka</p>
                        <p className="text-gray-600">Tel: 01303202218</p>
                        <p className="text-gray-600">Email: mdnaim01303202218@gmail.com</p>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-xl font-semibold text-gray-700 mb-2">Careers at Forever</h2>
                        <p className="text-gray-600 mb-4">Learn more about our teams and job openings.</p>
                        <button className="cursor-pointer border py-2 px-4 bg-black text-white hover:text-black hover:bg-white transition duration-300">
                            Explore Jobs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;