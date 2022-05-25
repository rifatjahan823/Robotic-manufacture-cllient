import React from 'react';

import './Review.css'

const Review = ({review}) => {
    return (
        <div className='review-style '>
            <div >
              <img className='img-fluid' src={review?.picture} alt="" />  
            <p>{review?.description}</p>    
            <p>Rating:<span style={{color:'#F7C000',fontWeight:"bold",fontSize:"18px"}}>{review?.rating}/5</span></p>
            </div>
      
    </div>
    );
};

export default Review;