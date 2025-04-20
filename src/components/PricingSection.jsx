import React, { useState } from 'react'

const PricingSection = () => {
    const { productCount, setProductCount } = useState(1);

    // calculate product price based on product count
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));




    return (

        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className='max-w-6xl mx-auto'>
                {/*heading */}
                <div className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16'>Pricing</div>
                {/* price -2 grids */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 '>
                    {/* starter */}
                    <div className='bg-white shadow-xl rounded-lg p-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Starter</h3>
                        <p className='text-4xl font-bold text-gray-800'>${starterPrice}/mo</p>
                    </div>
                    {/* business */}
                    <div className='bg-white shadow-xl rounded-lg p-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Business</h3>
                        <p className='text-4xl font-bold text-gray-800'>${businessPrice}/mo</p>
                    </div>

                    <div>

                    </div>
                </div>
                {/* third card */}
                <div>
                    <p className='text-gray-600 text-center text-lg mb-4'> Products</p>
                    <div className='relative px-4'>
                        <div className='flex items-center justify-center gap-2'>
                            <span className='text-gray-600 text-xs'>1</span>
                            <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                                type="range" min="1" max="50" value={productCount} onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-gray-600 text-xs'>50</span>
                        </div>
                        <div className='flex justify-center flex-col items-center mt-5'>
                            <p>Ready to get Started?</p>
                            <br/>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
