import React from 'react'
import { BiSolidUpvote } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ReviewPreview = ({review}) => {
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
      if (!showFullTextContent && review.content.length > 100) {
        textContent = review.content.slice(0, 100) + '...';
      }
    
      const handleShowMore = (e) => {
        e.stopPropagation();
        setShowFullTextContent(prevState => !prevState);
      };
    
    
      return (
        <section className='p-4 bg-slate-800 h-80 w-80 shadow-lg rounded-lg hover:shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105'>
          <div className='flex flex-col h-full w-full'>
            <div className='flex justify-between items-start mb-2'>
            <h5 className='text-sm text-gray-100'>Posted on {formattedDate}</h5>
            <div className='flex items-center'>
              <BiSolidUpvote className='text-green-300 mr-1' />
              <span className='text-green-300'>{review.upvotes}</span>
            </div>
            </div>
          <h2 className='text-x1 text-white font-bold truncate mb-2'>{review.title}</h2>
          <p className='text-white flex-1 overflow-auto'>{textContent}</p>
          <button className='text-green-200 mb-2 hover:text-green-300' onClick ={handleShowMore}>
            {showFullTextContent ? 'Show less' : 'Show more'}
          </button>

          <button>
            <Link to={`/reviews/${review.id}`} className='block w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center'>Read More </Link>
          </button>
        </div>
        </section>
      );
}

export default ReviewPreview