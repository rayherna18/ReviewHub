import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom';

const PortalCards = () => {
  return (
    <section className='p-10 bg-slate-200'>

      <div className='container-xl lg:container m-auto'>

        <h2 className='text-4xl font-bold text-center'>Portal</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4 rounded-lg'>

        <Link className='transform transition-transform duration-300 hover:scale-105'>
          <Card bg='bg-green-500 text-white'  className='h-40'>
            <h2 className='text-xl font-bold'>VIEW</h2>
            <p className='text-4xl font-bold'>RAVES</p>
            <p className='mt-2 font-semibold'>The Best Of The Best</p>
          </Card>
        </Link>

        <Link className='transform transition-transform duration-300 hover:scale-105'>
          <Card bg='bg-red-500 text-white'  className='h-40'>
          <h2 className='text-xl font-bold'>VIEW</h2>
          <p className='text-4xl font-bold'>RANTS</p>
          <p className='mt-2 font-semibold'>In Need Of TLC</p>
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