import React from 'react'

const FeatureSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      {/* heading text */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-900'>How can we help your Business?</h2>
        <p className='mt-4 text-gray-600 text-lg'>When you resell besnik, you build trust and increase sells</p>
      </div>
      {/* feature box-- 3 grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-15'>
        {features.map((feature, index) => (
          <div key={index} className='bg-white p-6 flex flex-col items-center justify-center shadow-md'>
            <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center ' style={{ backgroundColor: index === 0 ? "lightcoral" : index === 1 ? "lightblue" : "lightgreen"}}>
              <div className=' text-5xl text-center  rounded-lg p-4'>{feature.icon}</div>
            </div>
            <h3 className='text-2xl font-bold mb-2'>{feature.title}</h3>
            <p className='text-gray-700 text-base text-lg'>{feature.description}</p>
          </div>
        ))}
      </div>
      {/* button */}
      <div className='text-center mt-8'>
    <button className='bg-blue-500 text-white px-8 py-4 rounded-full cursor-pointer hover:bg-blue-600 transition-color shadow-2xl'>Become a Partner</button>
      </div>
    </section>
  )
}

export default FeatureSection
