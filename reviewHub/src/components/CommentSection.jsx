import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';

const CommentSection = ({ reviewId, userId }) => {
    const [comments, setComments] = useState([]);
    const [currentComment, setCurrentComment] = useState({
        content: '',
        user_id: '', 
        related_post: null,
    });

    useEffect(() => {
        async function fetchComments() {
            const { data } = await supabase
                .from('comments')
                .select()
                .eq('related_post', reviewId) // Filter comments by related_post
                .order('created_at', { ascending: true });

            setComments(data);
        }

        fetchComments();
    }, [reviewId]);

    const createComment = async (e) => {
        e.preventDefault();
        try {
            await supabase
                .from('comments')
                .insert([
                    { content: currentComment.content, user_id: userId, related_post: reviewId },
                ])
                .select();

                history.push(`/reviews/${reviewId}`);
        } catch (error) {
            console.error("Error creating comment: ", error);
        }
        window.location.href = '/';
    };

    return (
        <div className='commentsContainer'>
            <div className='pastComments'>
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
                    <h2 id='nullComments'>{'No Comments Yet!'}</h2>
                )}
            </div>
            <div className='newComment'>
                <input
                    type='text'
                    placeholder='Leave a comment'
                    id='commentInput'
                    value={currentComment.content}
                    onChange={(e) => setCurrentComment({ ...currentComment, content: e.target.value })}
                ></input>
                <button className='commentButton' onClick={createComment}>{'Post'}</button>
            </div>
        </div>
    );
};

export default CommentSection;
