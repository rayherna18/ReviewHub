// CreateReview.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const CreateReview = ({ userId }) => {
  const navigate = useNavigate();
  const [review, setReview] = useState({
    title: '',
    content: '',
    image_url: '',
    flag: '', 
    upvotes: 0,
    secret_key: 0,
    user_id: userId,
  });

  const createReview = async (e) => {
    e.preventDefault();
    try {
      await supabase
        .from('reviews')
        .insert([
          {
            title: review.title,
            content: review.content,
            image_url: review.image_url,
            flag: review.flag,
            upvotes: review.upvotes,
            secret_key: review.secret_key,
            user_id: review.user_id,
          },
        ])
        .select();
    } catch (error) {
      console.error('Error creating review: ', error);
    }
    navigate('/reviews');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <form onSubmit={createReview} className="space-y-6">
        <h2 className='text-2xl font-bold mb-4'>Create Review</h2>
        <div>
        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          name="title"
          value={review.title}
          onChange={(e) => setReview({ ...review, title: e.target.value })}
          required
        />
        </div>

        <div>
        <label htmlFor="content" className="block text-lg font-medium text-gray-700">
          Content
        </label>

        <textarea
          rows="10"
          cols="130"
          className='mt-1 block w-full border border-gray-300 rounded-lg p-2'
          name="content"
          value={review.content}
          onChange={(e) => setReview({ ...review, content: e.target.value })}
        />
        </div>

        <div>
        <label htmlFor="image_url" className="block text-lg font-medium text-gray-700">
          Image URL
        </label>
        <input
          className='mt-1 block w-full border border-gray-300 rounded-lg p-2'
          name="image_url"
          value={review.image_url}
          onChange={(e) => setReview({ ...review, image_url: e.target.value })}
        />
        </div>

        <div>
        <label htmlFor='flag' className="block text-lg font-medium text-gray-700">Flag</label>
              <div className='mt-2 flex space-x-4'>
                <label className='inline-flex items-center'>
                    <input
                        type='radio'
                        className='form-radio text-green-500'
                        name='flag'
                        value='Rave'
                        checked={review.flag === 'Rave'}
                        onChange={() => setReview({ ...review, flag: 'Rave' })}
                    />
                    <span className='ml-2'>Rave</span>
                </label>
                <label>
                    <input
                        type='radio'
                        name='flag'
                        value='Rant'
                        checked={review.flag === 'Rant'}
                        onChange={() => setReview({ ...review, flag: 'Rant' })}
                        className='form-radio text-red-500'
                    />
                    <span className='ml-2'>Rant</span>
                </label>
                </div>
            </div>
        
        <div>
        <label htmlFor="secret_key" className="block text-lg font-medium text-gray-700">
          Secret Key
        </label>
        <input
          type="number"
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          name="secret_key"
          value={review.secret_key}
          onChange={(e) => setReview({ ...review, secret_key: e.target.value })}
        />
        </div>
        <button type="submit" className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500">
          Create Review
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
