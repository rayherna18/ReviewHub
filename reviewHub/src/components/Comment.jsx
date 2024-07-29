import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

// The individual comments left by users on a review
const Comment = (props) => {

    return(
        <div className='py-5 flex flex-row space-x-5 border border-solid border-slate-800'>
            <FaUserCircle className='ml-5 w-10 h-10'  />
            <p className='my-auto'>{props.content} - User {props.user_id}</p>
        </div>
    );

}

export default Comment;