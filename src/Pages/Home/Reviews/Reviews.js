import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Review from './Review/Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery(['reviews'], () => fetch('https://mysterious-anchorage-92670.herokuapp.com/review')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="container">
                <h2>What Our Customer Say</h2>
                <div className="row g-5">
                    {
                        reviews.map(review => <Review key={review._id} review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;