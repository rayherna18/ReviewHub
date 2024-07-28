import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom';

const PortalCards = () => {
  return (
    <section className='py-4'>

      <div className='container-xl lg:container m-auto'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4 rounded-lg'>

        <Link className='transform transition-transform duration-300 hover:scale-105'>
          <Card bg='bg-green-500'  className='h-40'>
            <h2 className='text-xl font-bold'>VIEW</h2>
            <p className='text-4xl font-bold'>RAVES</p>
            <p className='mt-2 font-semibold'>These come highly recommended</p>
          </Card>
        </Link>

        <Link className='transform transition-transform duration-300 hover:scale-105'>
          <Card bg='bg-red-500'  className='h-40'>
          <h2 className='text-xl font-bold'>VIEW</h2>
          <p className='text-4xl font-bold'>RANTS</p>
          <p className='mt-2 font-semibold'>The best of the best</p>
          </Card>
        </Link>

        <Link to='/reviews' className='transform transition-transform duration-300 hover:scale-105'>
          <Card bg='bg-slate-800' className='h-40'>
            <h2 className='text-xl font-bold text-white'>VIEW</h2>
            <p className='text-4xl font-bold text-white'>ALL</p>
          </Card>
        </Link>

        </div>

      </div>
      

    </section>
  )
}

export default PortalCards