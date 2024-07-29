import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { supabase } from '../client';
import { toast } from 'react-toastify';

const EditReview = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [review, setReview] = useState();

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
        return (
            <div className='loadingScreen'>
                <h2>Loading...</h2>
            </div>
        );
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

        toast.success('Review Updated Successfully!');
        // Redirect to the main page using useNavigate
        navigate(`/reviews/${review.id}`);
    };

    return (
        <div className='p-8 max-w-4xl mx-auto'>
            <form onSubmit={updateReview} className='space-y-6'>
                <h2 className='text-2xl font-bold mb-4'>Edit Review</h2>
                <label htmlFor='title' className="block text-lg font-medium text-gray-700">
                    Title
                </label>
                <input
                    type='text'
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    name='title'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
                <label htmlFor='content' className="block text-lg font-medium text-gray-700">
                    Content
                </label>
                <textarea
                    rows='10'
                    cols='100'
                    className='mt-1 block w-full border border-gray-300 rounded-lg p-2'
                    name='content'
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />

                <div>
                <label htmlFor='image_url' className='block text-lg font-medium text-gray-700'>
                    Image URL
                </label>
                <input
                    className='mt-1 block w-full border border-gray-300 rounded-lg p-2'
                    name='image_url'
                    value={newImageURL}
                    onChange={(e) => setNewImageURL(e.target.value)}
                />
                </div>

                <div>
                <label htmlFor='flag' className="block text-lg font-medium text-gray-700">Flag </label>
                <div className='mt-2 flex space-x-4'>
                <label className='inline-flex items-center'>
                    <input
                        type='radio'
                        className='form-radio text-green-500'
                        name='flag'
                        value='Rave'
                        checked={newFlag === 'Rave'}
                        onChange={() => setNewFlag('Rave')}
                    />
                    <span className='ml-2'>Rave</span>
                </label>
                <label>
                    <input
                        type='radio'
                        className='form-radio text-red-500'
                        name='flag'
                        value='Rant'
                        checked={newFlag === 'Rant'}
                        onChange={() => setNewFlag('Rant')}
                    />
                    <span className='ml-2'>Rant</span>
                </label>
                </div>
                </div>

                <label htmlFor='secret_key' className="block text-lg font-medium text-gray-700">
                    Secret Key
                </label>
                <input
                    type='number'
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    name='secret_key'
                    value={newSecretKey}
                    onChange={(e) => setNewSecretKey(e.target.value)}
                />
                <button type='submit' className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default EditReview;
