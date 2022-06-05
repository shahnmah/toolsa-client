import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, img, customer_review, rating} = review
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 text-center shadow p-3 review">
            <div className="review-img-container">
                <img src={img} alt="" />
            </div>
            <p className='mt-5'>{rating} Star</p>
            <h4>{name}</h4>
            <div style={{backgroundColor:'rgba(51, 102, 204, 0.1)'}} className='p-2'>
                <p>{customer_review}</p>
            </div>
        </div>
    );
};

export default Review;