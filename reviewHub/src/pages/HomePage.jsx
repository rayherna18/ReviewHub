import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import PortalCards from '../components/PortalCards'
import RecentReviews from '../components/RecentReviews'
import { supabase } from '../client'
const HomePage = () => {

  const [reviews, setReviews] = React.useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      setReviews(response.data);

      } catch (error) {
        console.log('error', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
    <Hero />
    <PortalCards />
    <main className='flex justify-center'>
    <RecentReviews reviews={reviews}/>
    </main>
    </div>
  )
}

export default HomePage