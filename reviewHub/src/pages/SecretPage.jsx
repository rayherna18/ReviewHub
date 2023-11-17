import React from 'react';
import { Link } from 'react-router-dom';

const SecretPage = () => {
    const [response, setResponse] = useState('');
    
    return(
        <div>
            <h2>Enter secrey key to edit review: </h2>
            <input value={response}> </input>
            <Link to='/'>Back to Home</Link>
        </div>
    );
}

export default SecretPage;