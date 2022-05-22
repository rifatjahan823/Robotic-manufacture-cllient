import React from 'react';
import Banner from './Banner/Banner';
import BussinessSummery from './BussinessSummery/BussinessSummery';
import LogoArea from './LogoArea/LogoArea';
import Product from './Product/Product';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <BussinessSummery></BussinessSummery>
            <Review></Review>
            <LogoArea></LogoArea>
        </div>
    );
};

export default Home;