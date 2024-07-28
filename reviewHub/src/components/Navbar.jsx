import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
    
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'bg-gray-700 text-white text-lg font-medium text-gray-700 hover:text-green-500 rounded-md px-3 py-2'  : 'text-lg font-medium text-gray-100 hover:text-green-300 rounded-md px-3 py-2';
    }
  return (
    <div className="flex items-center justify-between bg-slate-800 h-20 px-3 py-2" >
        <h2 className="text-2xl font-bold justify-start">
            <span className='text-gray-100'>Review </span>
            <span className='text-green-500'>Hub</span>
            </h2>
        <div className='flex items-center space-x-4 m1-auto mr-4'>
        <NavLink to="/" className= {activeLinkClass}>
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/new" className= {activeLinkClass}>
          <h2>Add Review</h2>
        </NavLink>
        
       {/*} <input
          type="text"
          placeholder="Search"
          className="headerAssets"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        <h5 className="text-lg font-medium text-gray-100 flex items-center justify-end m">
          <FaUser className="mr-2" />Welcome User
        </h5>
      </div>
      </div>
  )
}

export default Navbar