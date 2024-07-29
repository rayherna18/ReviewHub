import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUpvote } from "react-icons/bi";
import ReviewTag from './ReviewTag';


const Block = ({ review }) => {
  const formattedDate = new Date(review.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const [showFullTextContent, setShowFullTextContent] = React.useState(false);
  let textContent = review.content;
  if (!showFullTextContent) {
    textContent = review.content.slice(0, 100) + '...';
  }

  const handleShowMore = (e) => {
    e.stopPropagation();
    setShowFullTextContent(prevState => !prevState);
  };


  return (
    <Link to={`/reviews/${review.id}`}  className='p-12 bg-slate-800 shadow-lg rounded-lg hover:shadow-xl w-3/6 items-center mx-auto transform transition-transform duration-300 hover:scale-105'>
      <ReviewTag flag={review.flag} />
      <div className='flex flex-col h-full'>
        <div className='flex justify-between items-center mb-2'>
        <h5 className='text-sm text-gray-100'>Posted on {formattedDate}</h5>
        <div className='flex items-center'>
          <BiSolidUpvote className='text-green-300 mr-1' />
          <span className='text-green-300'>{review.upvotes}</span>
        </div>
      </div>
      <h2 className='text-x1 text-white font-bold truncate'>{review.title}</h2>
      <p className='text-white mt-4'>{textContent}</p>
 {/*    <button className='text-slate-100 mb-5 hover:text-slate-200' onClick ={handleShowMore}>
        {showFullTextContent ? 'Show less' : 'Show more'}
      </button>
      */}
    </div>
    </Link>
  );
};

export default Block;
