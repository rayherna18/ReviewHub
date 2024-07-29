import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Comment from './Comment';

const CommentSection = ({ reviewId, userId }) => {

    const [comments, setComments] = useState([]);
    const [currentComment, setCurrentComment] = useState('');

    // fetches comments from the database
    const fetchComments = async () => {
        const { data } = await supabase
            .from('comments')
            .select()
            .eq('related_post', reviewId) // Filter comments by related_post
            .order('created_at', { ascending: true });
        setComments(data);
    };



    useEffect(() => {
        fetchComments();
    }, [reviewId]);

    const createComment = async (e) => {
        e.preventDefault();
        try {
            await supabase
                .from('comments')
                .insert([
                    { content: currentComment, user_id: userId, related_post: reviewId },
                ]);
            
            setCurrentComment('');
            await fetchComments();
        } catch (error) {
            console.error("Error creating comment: ", error);
        }
    };

    return (
        <div className='flex flex-col space-y-4'>
            <div className='bg-gray-200 p-4 rounded-lg shadow-md space-y-3 '>
                {comments && comments.length > 0 ? (
                    comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            content={comment.content}
                            user_id={comment.user_id}
                            related_post={comment.related_post}
                        />
                    ))
                ) : (
                    <h2 id='text-lg text-center text-gray-700'>{'No Comments Yet!'}</h2>
                )}
            </div>
            <div className='flex items-center space-x-2'>
                <input
                    type='text'
                    placeholder='Leave a comment'
                    className='flex-grow p-2 border border-gray-300 rounded-lg'
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                ></input>
                <button className='p-2 bg-green-500 text-white rounded-lg hover:bg-green-600' onClick={createComment}>{'Post'}</button>
            </div>
        </div>
    );
};

export default CommentSection;
