import React from 'react';
import Banner from './Banner/Banner';
import BussinessSummery from './BussinessSummery/BussinessSummery';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinessSummery></BussinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;