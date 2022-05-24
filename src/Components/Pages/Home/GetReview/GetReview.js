import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Review from '../Review/Review';
import testimonials from '../../../image/home-page-img/testimonial-bg.png';
import Carousel from 'react-elastic-carousel';

const GetReview = () => {
          //use react query
          const {data:reviews,isLoading}=useQuery(('reviews'),()=> fetch(`http://localhost:5000/review`)
          .then(res=>res.json()))
          if(isLoading){
              return<Loading></Loading>
          }
          console.log(reviews)
      return (
        <div className='review'style={{backgroundImage: `url(${testimonials})`, backgroundRepeat: "no-repeat", backgroundSize:"cover",position:"relative",backgroundPosition:"center",zIndex:'5',color:"white"}}> 
          <div className='container '>
          <h3>Testimonial</h3>
        <h2 className='text-center'>What Our Clients Say</h2>
              <div >
              <Carousel itemsToShow={1}>
                  {
                  reviews?.map(review=><Review
                    review={review}
                  key={review._id}>
                  </Review>)   
                  }             
             </Carousel>
              </div>    
          </div>
          </div>
      );
};

export default GetReview;