import React from 'react';

import './Review.css'

const Review = ({review}) => {
    return (
        <div className=''>
            <div className=''>
            <p>{review?.rating}</p>
            <p>{review?.description}</p>
            </div>
      
    </div>
    );
};

export default Review;