import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footet = () => {
    return (
        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt='logo'></img>
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus quaerat similique nisi ab voluptate ut accusantium officiis alias impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi nulla excepturi porro. Quae molestiae doloribus nihil nesciunt inventore quia voluptatem aperiam quibusdam</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+8801303202218</li>
                        <li>mdnaim01303202218@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com</p>
            </div>
        </>
    )
}

export default Footet