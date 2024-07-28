import React from 'react';
import { Link } from 'react-router-dom';
import './Block.css';

const Block = ({ review }) => {
  const formattedDate = new Date(review.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    console.log(review),
    <Link to={`/reviews/${review.id}`}  className='p-12 bg-slate-800 shadow-lg rounded-lg hover:shadow-xl w-3/6 items-center mx-auto transform transition-transform duration-300 hover:scale-105'>
      <div className='flex flex-col h-full'>
      <h5 className='text-sm text-gray-100 mb-2'>Posted on {formattedDate}</h5>
      <h2 className='text-x1 text-white font-bold mb-2 truncate'>{review.title}</h2>
      <p className='text-sm text-green-300 mt-auto'>Upvotes: {review.upvotes}</p>
    </div>
    </Link>
  );
};

export default Block;
