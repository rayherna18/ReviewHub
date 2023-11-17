import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SecretPage.css';
const SecretPage = () => {
  const location = useLocation();
  const { state } = location;
  const [response, setResponse] = useState('');

  const handleSecretInput = () => {
    if (response == state.secretKey) {
      window.location.href = `/edit/${state.reviewId}`;
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className='secretPage'>
      <h2>Enter secret key to edit review: </h2>
      <input
        type="number"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        id='secretInput'
        placeholder='Enter secret key'
      />
      <button onClick={handleSecretInput} id='secretSubmit'>Submit</button>
    </div>
  );
};

export default SecretPage;
