import React from 'react'

const Hero = () => {
  return (
    <section className='bg-green-500 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                    A destination for all your reviews
                </h1>
                <p className='my-4 font-bold text-2xl text-slate-800'>Share your opinion today!</p>
            </div>
        </div>
    </section>
  )
}

export default Hero