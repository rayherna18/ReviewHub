import React from 'react'
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ReviewContent = ({review, onEdit, onDelete, onUpvote}) => {

    const formattedDate = new Date(review.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

  return (
    <>
     <div className="flex justify-between items-center mb-4">
        <h6 className='text-gray-500 flex flex-rows'>
            <Link to='/reviews' className='text-green-500'>
            <FaArrowAltCircleLeft size='35' color='202c3c'/>
            </Link>
            <div className='my-auto ml-2'>Posted on {formattedDate} </div>
        </h6>
        <div className={`${review.flag.toLowerCase() === 'rant' ? 'bg-red-500': 'bg-green-500'} text-white px-4 py-2 rounded`}>
          <p>{review.flag}</p>
        </div>
      </div>
      <h2 className='text-2xl font-bold mb-4'>{review.title}</h2>
      <p className='mb-4'>{review.content}</p>
      { review.image_url &&  <img src={review.image_url} alt={review.title} className="w-full h-auto mb-4" />}
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center'>
        <img
          src="https://i.ibb.co/9qcxQZC/15-151233-dale-like-png-purple-like-button-png-removebg-preview.png"
          className="w-8 h-8 mr-2 cursor-pointer"
          alt="like"
          onClick={onUpvote}
        />
        <p className='ml-2'>{review.upvotes}</p>
        </div>
        <div className='flex space-x-2'>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onEdit}>
              <FiEdit2 />
            </button>
          <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewContent