import React from 'react'

const Card = ({ children, bg = 'bg-gray-200', className=''}) => {
  return (
    <div className={`${bg} ${className} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card