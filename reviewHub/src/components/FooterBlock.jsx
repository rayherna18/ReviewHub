import React from 'react'
import { Link } from 'react-router-dom';

const FooterBlock = () => {
  return (
    <div className='bg-slate-300'>
      <div className='mt-20 container flex justify-center space-x-40 mx-auto h-40 font-bold'>
      <Link>
      ABOUT US
      </Link>

      <Link>
      CONTACT US
      </Link>

      <Link>
      FAQ
      </Link>

      <Link>
      BLOGS
      </Link>

      <Link>
      PRIVACY POLICY
      </Link>
      </div>
    </div>
  )
}

export default FooterBlock