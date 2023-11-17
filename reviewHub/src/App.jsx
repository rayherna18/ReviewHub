import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client';
import { Link, useRoutes } from 'react-router-dom';
import CreateReview from './pages/CreateReview';
import ReadReviews from './pages/ReadReviews';
import EditReview from './pages/EditReview';
import DetailedReview from './pages/DetailedReview';
import SecretPage from './pages/SecretPage';
import { FaUser } from 'react-icons/fa';
import { nanoid } from 'nanoid';

function App() {
  const [reviews, setReviews] = useState([]);
  const [userId, setUserId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {

      setUserId(storedUserId);
    } else {
      const newUserID = nanoid();
      setUserId(newUserID);
      localStorage.setItem('userId', newUserID);
    }

    async function fetchReviews() {
      let query = supabase.from('reviews').select().order('created_at', { ascending: true });

      if (searchTerm.trim() !== '') {
        query = query.ilike('title', `%${searchTerm.trim()}%`);
      }

      const { data } = await query;

      setReviews(data);
    }

    fetchReviews();
  }, [searchTerm]);

  const routes = useRoutes([
    {
      path: '/reviews/:id',
      element: <DetailedReview data={reviews} userId={userId} />,
    },
    {
      path: '/new',
      element: <CreateReview setReviews={setReviews} userId={userId} />,
    },
    {
      path: '/edit/:id',
      element: <EditReview/>,
    },
    {
      path: '/',
      element: <ReadReviews data={reviews} />,
    },
    {
      path: '/secret',
      element: <SecretPage data={reviews} />,
    },
  ]);

  return (
    <div className="reviewApp">
      <div className="reviewApp-nav">
        <h2 className="appLogo">Review <span id='appLogoColor'>Hub</span></h2>
        <Link to="/" className="headerAssets">
          <h2>Home</h2>
        </Link>
        <Link to="/new" className="headerAssets">
          <h2>Add Review</h2>
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="headerAssets"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h5 className="headerAssets">
          <FaUser id="userIcon" /> Welcome User {userId}
        </h5>
      </div>
      {routes}
    </div>
  );
}

export default App;
