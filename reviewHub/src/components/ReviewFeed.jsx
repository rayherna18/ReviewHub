import React, { useEffect, useState } from 'react'
import Block from './Block'
const ReviewFeed = ({ searchTerm, sortBy}) => {

    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);

    // Fetches reviews from the database
    useEffect(() => {

        const fetchReviews = async () => {
            let query = supabase.from('reviews').select().order(sortBy, { ascending: sortBy === 'created_at' });

            if (searchTerm.trim() !== '') {
                query = query.ilike('title', `%${searchTerm.trim()}%`);
            }

            const { data } = await query;

            print(data);

            setReviews(data);
        }
        fetchReviews();
    }, [searchTerm, sortBy]);

    // Fills sorted reviews based on the sortBy state
    useEffect(() => {
        let sortedReviews = [...reviews];
        if (sortBy === 'created_at') {
            sortedReviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } 
        else if (sortBy === 'upvotes') {
            sortedReviews.sort((a, b) => b.upvotes - a.upvotes);
        }
    
        const filtered = sortedReviews.filter((review) => !searchTerm || review.title && review.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
        setFilteredReviews(filtered);
    }, [reviews, sortBy, searchTerm]);

    return (
        <div className='p-4'>
            {filteredReviews.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filteredReviews.map((review) => (
                        <Block key={review.id} review={review} />
                    ))}
                </div>

            ) : (
                <h2 className='text-2xl font-bold text-center'>
                    No Reviews Yet
                </h2>
            )
        }
        </div>
    )
}

export default ReviewFeed