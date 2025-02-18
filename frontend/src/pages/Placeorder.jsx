import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'



const Placeorder = () => {
    const [method, setMethod] = useState('cod')
    const { navigate } = useContext(ShopContext)
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* -----------Left side --------------- */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={"INFORMATION"} />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Divisions' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Home Address' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Additional message' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number' />

            </div>
            {/* --------------Right Side------------ */}
            <div className='mt-8'>
                <div className='mt-8 mi-w-80'>
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <Title text1={"PAYMENT"} text2={"METHOD"} />
                    {/* ----------------Payment method----------- */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('card')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-[14px] h-[14px] border  rounded-full ${method === 'card' ? 'bg-green-400' : ''}`}>
                            </p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>Master Card</p>
                        </div>
                        <div className='flex gap-3 flex-col lg:flex-row'>
                            <div onClick={() => setMethod('bkash')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-[14px] h-[14px] border  rounded-full ${method === 'bkash' ? 'bg-green-400' : ''}`}>
                                </p>
                                <p className='text-gray-500 text-sm font-medium mx-4'>Bkash</p>
                            </div>
                            <div className='flex gap-3 flex-col lg:flex-row'>
                                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                    <p className={`min-w-[14px] h-[14px] border  rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}>
                                    </p>
                                    <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full text-end mt-8'>
                        <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placeorder