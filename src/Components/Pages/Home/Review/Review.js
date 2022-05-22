import React from 'react';
import Carousel from 'react-elastic-carousel';
import testimonials from '../../../image/home-page-img/testimonial-bg.png'
import './Review.css'

const Review = () => {
    return (
    <div className='review'style={{backgroundImage: `url(${testimonials})`, backgroundRepeat: "no-repeat", backgroundSize:"cover",position:"relative",backgroundPosition:"center",zIndex:'5',color:"white"}}>
    <div className='container'> 
        <h3>Testimonial</h3>
    <h2 className='text-center'>What Our Clients Say</h2>
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