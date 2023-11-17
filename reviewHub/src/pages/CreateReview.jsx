// CreateReview.js
import React, { useState } from 'react';
import { supabase } from '../client';
import './CreateReview.css';

const CreateReview = ({ userId }) => {
  const [review, setReview] = useState({
    title: '',
    content: '',
    image_url: '',
    flag: '', // Use a single property for the selected option
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
    window.location.href = '/';
  };

  return (
    <div className="createPage">
      <form onSubmit={createReview} className="reviewForm">
        <h2>Create Review</h2>
        <label htmlFor="title" className="labelTxt">
          Title
        </label>
        <br />
        <input
          type="text"
          className="additionalInputs"
          name="title"
          value={review.title}
          onChange={(e) => setReview({ ...review, title: e.target.value })}
          required
        />
        <br />
        <br />
        <label htmlFor="content" className="labelTxt">
          Content
        </label>
        <br />
        <textarea
          rows="10"
          cols="130"
          id="contentInput"
          name="content"
          value={review.content}
          onChange={(e) => setReview({ ...review, content: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="image_url" className="labelTxt">
          Image URL
        </label>
        <br />
        <input
          className="additionalInputs"
          name="image_url"
          value={review.image_url}
          onChange={(e) => setReview({ ...review, image_url: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor='flag' className='labelTxt'>
                    Flag
                </label>
                <br />
                <label>
                    Rave
                    <input
                        type='radio'
                        className='flagToggle'
                        name='flag'
                        value='Rave'
                        checked={review.flag === 'Rave'}
                        onChange={() => setReview({ ...review, flag: 'Rave' })}
                    />
                </label>
                <label>
                    Rant
                    <input
                        type='radio'
                        className='flagToggle'
                        name='flag'
                        value='Rant'
                        checked={review.flag === 'Rant'}
                        onChange={() => setReview({ ...review, flag: 'Rant' })}
                    />
                </label>
        <br />
        <br />
        <label htmlFor="secret_key" className="labelTxt">
          Secret Key
        </label>
        <br />
        <input
          type="number"
          className="additionalInputs"
          name="secret_key"
          value={review.secret_key}
          onChange={(e) => setReview({ ...review, secret_key: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value="Create Review" className="formButton" />
      </form>
    </div>
  );
};

export default CreateReview;
