import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './DetailedReview.css';
function DetailedReview({data})
{
    const { id } = useParams();
    const reviewId = parseInt(id); 

    const review = data.find((review) => review.id === reviewId);

    if (!review) {
        return <h2>Review not found</h2>;
      }

    return (
        <div className='detailedPage'>
            <div id='topRowDetailed'>
            <h6>Posted on {review.created_at}</h6>
            <p>{review.flag}</p>
            </div>
            <h2 id='detailedTitle'>{review.title}</h2>
            <p>{review.content}</p>
            <img src={review.image_url} alt={review.title} id='detailedImage'/>
            <div id='bottomRowDetailed'>

            </div>
        </div>
    )
}

export default DetailedReview;