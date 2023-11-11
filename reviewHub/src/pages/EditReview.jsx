import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditReview = () => {

    const { id } = useParams();
    const [review, setReview] = useState(null);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newImageURL, setNewImageURL] = useState('');
    const [newFlag, setNewFlag] = useState('');
    const [newSecretKey, setNewSecretKey] = useState(null);

    useEffect(() => {
        // Fetch the post data using id
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('reviews')
                .select()
                .eq('id', id);

            if (error) {
                console.error("Error fetching post:", error);
            } else {
                if (data.length > 0) {
                    setReview(data[0]);
                    setNewTitle(data[0].title);
                    setNewContent(data[0].content);
                    setNewImageURL(data[0].image_url);
                    setNewFlag(data[0].flag);
                    setNewSecretKey(data[0].secret_key);
                } else {
                    setReview(null);
                }
            }
        };

        fetchData();
    }, [id]);

    if(!review) {
        return <div>Loading...</div>;
    }

    const updateReview = async (event) => {
        event.preventDefault();

        // Collect the new values from the form inputs
        const updatedReview = {
            title: newTitle,
            content: newContent,
            image_url: newImageURL,
            flag: newFlag,
            secret_key: newSecretKey,
        };

        // Update the post in the Supabase database
        const { data, error } = await supabase
            .from('reviews')
            .update(updatedReview)
            .eq('id', id);

        if (error) {
            console.error("Error updating post:", error);
        } else {
            console.log("Post updated successfully");
        }

        // Redirect to the main page
        window.location = "/";
    };

    return(
        <div className='createPage'>
            <form onSubmit={createReview} className='reviewForm'>
                <h2>Create Review</h2>
                <label htmlFor='title' className='labelTxt'>Title</label>
                <br />
                <input type='text' className='additionalInputs' name='title' value={review.title} onChange={(e) => setReview({ ...review, title: e.target.value })} />
                <br /><br />
                <label htmlFor='content' className='labelTxt'>Content</label>
                <br />
                <textarea rows="10" cols="100" id='contentInput' name='content' value={review.content} onChange={(e) => setReview({ ...review, content: e.target.value })} />
                <br /><br />
                <label htmlFor='image_url' className='labelTxt'>Image URL</label><br />
                <input className='additionalInputs' name='image_url' value={review.image_url} onChange={(e) => setReview({ ...review, image_url: e.target.value })} />
                <br /><br />
                <label htmlFor='flag' className='labelTxt'>Flag</label><br />
                <input type='text' className='additionalInputs' name='flag' value={review.flag} onChange={(e) => setReview({ ...review, flag: e.target.value })} />
                <br /><br />
                <label htmlFor='secret_key' className='labelTxt'>Secret Key</label><br />
                <input type='number' className='additionalInputs' name='secret_key' value={review.secret_key} onChange={(e) => setReview({ ...review, secret_key: e.target.value })} />
                <br /><br />
                <input type='submit' value='Create Review' className='formButton' />
            </form>
        </div>
    )


}

export default EditReview;