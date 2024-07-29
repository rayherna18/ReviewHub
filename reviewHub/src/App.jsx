import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CreateReview from './pages/CreateReview';
import ReadReviews from './pages/ReadReviews';
import EditReview from './pages/EditReview';
import DetailedReview from './pages/DetailedReview';
import SecretPage from './pages/SecretPage';
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { reviewLoader } from './loaders/ReviewLoader';
function App() {


  const addReview = async (review) => {


  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= { <MainLayout /> }>
      <Route index element={<HomePage />} />
      <Route path="/reviews" element={<ReadReviews/>} />
      <Route path="/reviews/raves" element={<ReadReviews/>} />
      <Route path="/reviews/rants" element={<ReadReviews/>} />
      <Route path="/reviews/:id" element={<DetailedReview />} loader={reviewLoader} />
      <Route path="/new" element={<CreateReview />} />
      <Route path="/edit/:id" element={<EditReview />} />
      <Route path="/secret" element={<SecretPage />} />
      <Route path='*' element={ <NotFoundPage/> } />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
{/*}

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

 */}
}

export default App;
