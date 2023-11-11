import React, { useState, useEffect } from 'react';
import Block from '../components/Block';

const ReadReviews = (props) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(props.data);
    }, [props]);

    return (
        <div className='readPage'>
            <h2>Catalogue</h2>
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