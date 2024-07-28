import React from 'react'
import { Link } from 'react-router-dom';

const FooterBlock = () => {
  return (
    <div className='bg-gray-200 h-128 flex flex-row content-evenly gap-10'>
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
  )
}

export default FooterBlock