import React from 'react'
import ReviewPreview from './ReviewPreview'

const RecentReviews = ({reviews}) => {
  return (
    <div className='py-8'>
        <h2 className='text-3xl font-bold text-slate-800 mb-4 text-center'>
            Recent Reviews
        </h2>
        <div className='grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {reviews.map((review) => (
            <ReviewPreview key={review.id} review={review} />
        ))}
        </div>
    </div>
  )
}

export default RecentReviews