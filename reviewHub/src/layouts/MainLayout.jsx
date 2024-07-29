import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterBlock from '../components/FooterBlock';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
        <Outlet />
        </main>
        <FooterBlock />
    </div>
  )
}

export default MainLayout