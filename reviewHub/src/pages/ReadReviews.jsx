import React, { useState, useEffect } from 'react';
import Block from '../components/Block';

const ReadReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('date');
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    // Set reviews based on the current sorting option
    let sortedReviews;
    if (sortBy === 'date') {
      sortedReviews = [...props.data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === 'upvotes') {
      sortedReviews = [...props.data].sort((a, b) => b.upvotes - a.upvotes);
    } else {
      // Default case: no sorting
      sortedReviews = [...props.data];
    }

    // Filter reviews based on the search term
    const filtered = sortedReviews.filter((review) =>
  (typeof props.searchTerm !== 'string' || props.searchTerm.trim() === '' ||
    (review.title && typeof review.title === 'string' &&
      review.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
  )
);

setFilteredReviews(filtered);
  }, [props.data, sortBy, props.searchTerm]);

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
      {filteredReviews.length > 0 ? (
  filteredReviews.map((review, index) => (
    <Block
      key={`${review.secret_key}-${index}`}  // Using both secret_key and index for uniqueness
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
