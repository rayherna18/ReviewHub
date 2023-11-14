import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './DetailedReview.css';
function DetailedReview({ data }) {
    const { id } = useParams();
    const reviewId = parseInt(id);
    const [isRant, setIsRant] = useState(false);

    const review = data.find((review) => review.id === reviewId);

    useEffect(() => {
        if (review) {
            if (review.flag === 'rant') {
                setIsRant(true);
            }
        }
    }, [review])

    if (!review) {
        return <h2>Review not found</h2>;
    }



    return (
        <div className='detailedPage'>
            <div id='topRowDetailed'>
                <h6>Posted on {review.created_at}</h6>
                <div className={isRant ? 'rantContainer' : 'raveContainer'}>
                    <p id='flagTxt'>{review.flag}</p>
                </div>
            </div>
            <h2 id='detailedTitle'>{review.title}</h2>
            <p>{review.content}</p>
            <img src={review.image_url} alt={review.title} id='detailedImage' />
            <div id='bottomRowDetailed'>
                <img src="https://i.ibb.co/9qcxQZC/15-151233-dale-like-png-purple-like-button-png-removebg-preview.png" className='detailedIcon'></img>
            </div>

            <div id='commentSection'>
                
            </div>
        </div>
    )
}

export default DetailedReview;