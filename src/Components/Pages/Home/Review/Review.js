import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Review.css'

const Review = () => {
    return (
    <div className='container'>
        <div className='review'>
            <h2 className='text-center mb-4'>Peole says</h2>
        <Carousel itemsToShow={3}>
            <p>rrrrrrrrrr</p>
            <p>rrrrrrrrrr</p>
            <p>rrrrrrrrrr</p>
            <p>rrrrrrrrrr</p>
            <p>rrrrrrrrrr</p>
            <p>rrrrrrrrrr</p>
         </Carousel>
        </div>
    </div>
    );
};

export default Review;