import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { supabase } from '../client';
import './DetailedReview.css';
import CommentSection from '../components/CommentSection';
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import EditReview from './EditReview';

function DetailedReview({ data }) {
    const { id } = useParams();
    const reviewId = parseInt(id);
    const [isRant, setIsRant] = useState(false);

    const review = data.find((review) => review.id === reviewId);

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
            if (flag === 'rant') {
                setIsRant(true);
            }
            else {
                setIsRant(false);
            }
        }
    }, [review])

    if (!review) {
        return <h2>Review not found</h2>;
    }



    return (
        <div className='detailedPage'>
            <div id='topRowDetailed'>
                <h6>Posted on {formattedDate}</h6>
                <div className={isRant ? 'rantContainer' : 'raveContainer'}>
                    <p id='flagTxt'>{review.flag}</p>
                </div>
            </div>
            <h2 id='detailedTitle'>{review.title}</h2>
            <h3>{reviewId}</h3>
            <p>{review.content}</p>
            <img src={review.image_url} alt={review.title} id='detailedImage' />
            <div id='bottomRowDetailed'>
                <img src="https://i.ibb.co/9qcxQZC/15-151233-dale-like-png-purple-like-button-png-removebg-preview.png" className='detailedIcon'></img>
                <div id='alterButtons'>
                <Link to={`/edit/${reviewId}`}><button className='alterButton'><FiEdit2 /></button></Link>
                <button className='alterButton'><MdDelete /></button>
            </div>
            </div>
            <hr id='roundedDivider'></hr>
            <CommentSection reviewId={reviewId} />
            {routes}
        </div>
    )
}

export default DetailedReview;