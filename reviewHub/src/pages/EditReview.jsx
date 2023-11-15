import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
const EditReview = () => {
    const { id } = useParams();
    const [review, setReview] = useState(null);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newImageURL, setNewImageURL] = useState('');
    const [newFlag, setNewFlag] = useState('');
    const [newSecretKey, setNewSecretKey] = useState(null);

    useEffect(() => {
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

    if (!review) {
        return <div>Loading...</div>;
    }

    const updateReview = async (event) => {
        event.preventDefault();

        const updatedReview = {
            title: newTitle,
            content: newContent,
            image_url: newImageURL,
            flag: newFlag,
            secret_key: newSecretKey,
        };

        const { data, error } = await supabase
            .from('reviews')
            .update(updatedReview)
            .eq('id', id);

        if (error) {
            console.error("Error updating post:", error);
        } else {
            console.log("Post updated successfully");
        }

        // Redirect to the main page using useNavigate
        navigate("/");
    };

    return (
        <div className='createPage'>
            <form onSubmit={updateReview} className='reviewForm'>
                <h2>Create Review</h2>
                <label htmlFor='title' className='labelTxt'>Title</label>
                <br />
                <input type='text' className='additionalInputs' name='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <br /><br />
                <label htmlFor='content' className='labelTxt'>Content</label>
                <br />
                <textarea rows="10" cols="100" id='contentInput' name='content' value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                <br /><br />
                <label htmlFor='image_url' className='labelTxt'>Image URL</label><br />
                <input className='additionalInputs' name='image_url' value={newImageURL} onChange={(e) => setNewImageURL(e.target.value)} />
                <br /><br />
                <label htmlFor='flag' className='labelTxt'>Flag</label><br />
                <input type='text' className='additionalInputs' name='flag' value={newFlag} onChange={(e) => setNewFlag(e.target.value )} />
                <br /><br />
                <label htmlFor='secret_key' className='labelTxt'>Secret Key</label><br />
                <input type='number' className='additionalInputs' name='secret_key' value={newSecretKey} onChange={(e) => setNewSecretKey(e.target.value)} />
                <br /><br />
                <input type='submit' value='Update Review' className='formButton' />
            </form>
        </div>
    )


}

export default EditReview;