import React from 'react';
import Banner from './Banner/Banner';
import Benifit from './Benifit/Benifit';
import BussinessSummery from './BussinessSummery/BussinessSummery';
import GetReview from './GetReview/GetReview';
import LogoArea from './LogoArea/LogoArea';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <BussinessSummery></BussinessSummery>
            <Benifit></Benifit>
            <GetReview></GetReview>
            <LogoArea></LogoArea>
        </div>
    );
};

export default Home;