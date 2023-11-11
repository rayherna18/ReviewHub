import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client';
import { Link, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import CreateReview from './pages/CreateReview';
import ReadReviews from './pages/ReadReviews';
import EditReview from './pages/EditReview';
import DetailedReview from './pages/DetailedReview';

function App() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function fetchReviews() {
      const { data } = await supabase
        .from('reviews')
        .select()
        .order('created_at', { ascending: true });

      // Update the state of characters
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
      element: <CreateReview setReviews={setReviews} />,
    },
    {
      path: '/edit/:id',
     element: <EditReview data={reviews} />,
    },
    {
      path: '/',
      element: <ReadReviews data={reviews} />,
    },
  ]);

  return (
    <div className='reviewApp'>
      <div className='reviewApp-nav'>
        <h2>ReviewHub</h2>
        <Link to='/'  className='headerLink'><h2>Home</h2></Link>
        <Link to='/new' className='headerLink'><h2>Add Review</h2></Link>
        </div>
        {routes}
    </div>
  )
}

export default App
