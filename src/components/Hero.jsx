import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
const Hero = () => {
    return (
        <div>
            <div className='absolute inset-x-0 top-[15%] text-center'>
                <h1 className='text-4xl font-bold' >Model Y</h1>
                <p className='p-2 text-sm underline underline-offset-4'><a href="https://www.tesla.com/drive">Schedule a Demo Drive</a></p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
                <a href="https://www.tesla.com/modely/design#overview"><button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white'>Custom Order</button></a>
                <a href="https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200 "><button className='bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 '>View Inventory</button></a>
            </div>
            <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
                <FiChevronDown size={24} />
            </div>
        </div>
    )
}

export default Hero
