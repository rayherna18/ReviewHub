import React from 'react';
import { Link } from 'react-router-dom';
import './Block.css';

const Block = (props) => {
  const formattedDate = new Date(props.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <Link to={`/reviews/${props.id}`}  className='headerLink'><div className='block'>
      <h3>Posted on {formattedDate}</h3>
      <h2>{props.title}</h2>
      <p>Upvotes: {props.upvotes}</p>
    </div>
    </Link>
  );
};

export default Block;
