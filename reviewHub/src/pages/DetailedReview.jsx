import React from 'react';
import {useNavigate, useLoaderData } from 'react-router-dom'; // Import useNavigate
import { supabase } from '../client';
import CommentSection from '../components/CommentSection';
import ReviewContent from '../components/ReviewContent';

function DetailedReview() {
  const review = useLoaderData();
  const navigate = useNavigate();

  if (!review) {
    return <h2>Review not found</h2>;
  }

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
      <ReviewContent review={review} onEdit={() => navigate(`/edit/${review.id}`)}
      onDelete={deleteReview}
      onUpvote={increaseUpvote} />
      <hr className="my-6 border-t border-gray-300"></hr>
      <CommentSection reviewId={review.id}/>
    </div>
  );
}

export default DetailedReview;
