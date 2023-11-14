import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client';
import { Link, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import CreateReview from './pages/CreateReview';
import ReadReviews from './pages/ReadReviews';
import EditReview from './pages/EditReview';
import DetailedReview from './pages/DetailedReview';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [reviews, setReviews] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const newUserID = uuidv4();
    setUserId(newUserID);
    async function fetchReviews() {
      const { data } = await supabase
        .from('reviews')
        .select()
        .order('created_at', { ascending: true });

      // Update the state of reviews
      setReviews(data);
    }

    fetchReviews();
  }, []);

  const routes = useRoutes([
    {
      path: '/reviews/:id',
      element: <DetailedReview data={reviews} />,
    },
    {
      path: '/new',
      element: <CreateReview setReviews={setReviews} userId={userId}/>,
    },
    {
      path: '/',
      element: <ReadReviews data={reviews} />,
    },
  ]);

  return (
    <div className='reviewApp'>
      <div className='reviewApp-nav'>
        <h2 className='headerAssets'>ReviewHub</h2>
        <Link to='/'  className='headerAssets'><h2>Home</h2></Link>
        <input type='text' placeholder='Search' className='headerAssets' />
        <Link to='/new' className='headerAssets'><h2>Add Review</h2></Link>
        <h5 className='headerAssets'>Welcome User {userId}</h5>
        </div>
        {routes}
    </div>
  )
}

export default App
