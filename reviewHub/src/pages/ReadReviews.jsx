import React, { useState, useEffect } from 'react';
import Block from '../components/Block';

const ReadReviews = (props) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(props.data);
    }, [props]);

    return (
        <div className='readPage'>
            <div id='filterRow'>
                <h2 >Filter by</h2>
                <button className='filterButton'>Date</button>
                <button className='filterButton'>Upvotes</button>
            </div>
            {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                    <Block
                        key={review.secret_key} // Add a unique key using character.id
                        id={review.id}
                        created_at={review.created_at}
                        title={review.title}
                        upvotes={review.upvotes}
                    />
                ))
            ) : (
                <h2>{'No Reviews Yet!'}</h2>
            )}
        </div>
    );
};

export default ReadReviews;