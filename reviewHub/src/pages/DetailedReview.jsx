import React, { useEffect, useState } from 'react';
import {useNavigate, useLoaderData } from 'react-router-dom'; // Import useNavigate
import { supabase } from '../client';
import CommentSection from '../components/CommentSection';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

function DetailedReview({ data, onUpdateReview, userId }) {
  const review = useLoaderData();
  const navigate = useNavigate();

  if (!review) {
    return <h2>Review not found</h2>;
  }

  const formattedDate = new Date(review.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const handleEditClick = () => {
    navigate(`/edit/${review.id}`);
  };

  const deleteReview = async (e) => {
    try{
      await supabase.from('reviews').delete().eq('id', review.id);
      navigate('/');
    }
    catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const increaseUpvote = async () => {
    try {
      await supabase
        .from('reviews')
        .update({ upvotes: review.upvotes + 1 })
        .eq('id', review.id);
    }
    catch (error) {
      console.error('Error updating upvote:', error);
    }
  };
  

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h6 className='text-gray-500'>Posted on {formattedDate}</h6>
        <div className={`${review.flag.toLowerCase() === 'rant' ? 'bg-red-500': 'bg-green-500'} text-white px-2 py-1 rounded`}>
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
          onClick={increaseUpvote}
        />
        <p className='ml-2'>{review.upvotes}</p>
        </div>
        <div className='flex space-x-2'>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={handleEditClick}>
              <FiEdit2 />
            </button>
          <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={deleteReview}>
            <MdDelete />
          </button>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-300"></hr>
      <CommentSection reviewId={review.id}/>
    </div>
  );
}

export default DetailedReview;
