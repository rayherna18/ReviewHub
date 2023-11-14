import React, { useState, useEffect } from 'react';
import Block from '../components/Block';

const ReadReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    // Set reviews based on the current sorting option
    if (sortBy === 'date') {
      setReviews([...props.data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } else if (sortBy === 'upvotes') {
      setReviews([...props.data].sort((a, b) => b.upvotes - a.upvotes));
    }
  }, [props.data, sortBy]);

  const handleSortBy = (option) => {
    setSortBy(option);
  };

  return (
    <div className='readPage'>
      <div id='filterRow'>
        <h2>Filter by</h2>
        <button className='filterButton' onClick={() => handleSortBy('date')}>
          Date
        </button>
        <button className='filterButton' onClick={() => handleSortBy('upvotes')}>
          Upvotes
        </button>
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
