import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useRoutes } from 'react-router-dom'; // Import useNavigate
import { supabase } from '../client';
import './DetailedReview.css';
import CommentSection from '../components/CommentSection';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import EditReview from './EditReview';

function DetailedReview({ data, onUpdateReview }) {
  const { id } = useParams();
  const reviewId = parseInt(id);
  const [upvotes, setUpvotes] = useState(0);
  const [isRant, setIsRant] = useState(false);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const review = data.find((review) => review.id === reviewId);

  const increaseUpvote = async () => {
    try {
      const { data: updatedReview, error } = await supabase
        .from('reviews')
        .update({ upvotes: review.upvotes + 1 })
        .eq('id', reviewId)
        .single();

      if (error) {
        console.error('Error updating upvotes:', error);
        return;
      }

      setUpvotes(updatedReview.upvotes);

      // Notify the parent component to update the review data
      onUpdateReview(reviewId);

      // Navigate to the same detailed review page using navigate
      navigate(`/detailed/${reviewId}`);
    } catch (error) {
      console.error('Error updating upvotes:', error);
    }
  };

  const routes = useRoutes([
    {
      path: '/edit/:id',
      element: <EditReview data={review} />,
    },
  ]);

  const formattedDate = new Date(review.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  useEffect(() => {
    if (review) {
      let flag = review.flag;
      flag = flag.toLowerCase();
      setIsRant(flag === 'rant');
      setUpvotes(review.upvotes);
    }
  }, [review]);

  if (!review) {
    return <h2>Review not found</h2>;
  }

  return (
    <div className="detailedPage">
      <div id="topRowDetailed">
        <h6>Posted on {formattedDate}</h6>
        <div className={isRant ? 'rantContainer' : 'raveContainer'}>
          <p id="flagTxt">{review.flag}</p>
        </div>
      </div>
      <h2 id="detailedTitle">{review.title}</h2>
      <h3>{reviewId}</h3>
      <p>{review.content}</p>
      <img src={review.image_url} alt={review.title} id="detailedImage" />
      <div id="bottomRowDetailed">
        <img
          src="https://i.ibb.co/9qcxQZC/15-151233-dale-like-png-purple-like-button-png-removebg-preview.png"
          className="detailedIcon"
          alt="like"
          onClick={increaseUpvote}
        />
        <p>{upvotes}</p>
        <div id="alterButtons">
          <Link to={`/edit/${reviewId}`}>
            <button className="alterButton">
              <FiEdit2 />
            </button>
          </Link>
          <button className="alterButton">
            <MdDelete />
          </button>
        </div>
      </div>
      <hr id="roundedDivider"></hr>
      <CommentSection reviewId={reviewId} />
      {routes}
    </div>
  );
}

export default DetailedReview;
