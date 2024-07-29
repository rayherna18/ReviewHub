import React, { useState, useEffect } from 'react';
import ReviewFeed from '../components/ReviewFeed';

const ReadReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('created_at');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  }

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <input
          type="text"
          placeholder="Search reviews..."
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </div>

      <div className='mb-4 flex items-center space-x-4'>
        <button className={`px-4 py-2 rounded ${sortBy === 'created_at' ? 'bg-slate-800 text-white' : 'bg-gray-200'}`} 
        onClick={() => handleSortChange('created_at')}>
          Sort by Date
        </button>

        <button 
        className={`px-4 py-2 rounded ${sortBy === 'upvotes' ? 'bg-slate-800 text-white' : 'bg-gray-200'}`} 
        onClick={() => handleSortChange('upvotes')}>
          Sort by Upvotes
        </button>

      </div>
      <ReviewFeed searchTerm={searchTerm} sortBy={sortBy} />
    </div>
  );
};

export default ReadReviews;
