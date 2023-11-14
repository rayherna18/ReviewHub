import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.css';
import { FaUserCircle } from "react-icons/fa";

const Comment = (props) => {

    return(
        <div id='commentContainer'>
            <FaUserCircle className='userIcon'  />
            <p className='comment'>{props.content} - {props.user_id}</p>
        </div>
    );

}

export default Comment;