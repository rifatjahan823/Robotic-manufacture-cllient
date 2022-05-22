import React from 'react';
import './GetProduct.css'

const GetProduct = ({product}) => {
    const{picture,name,minimumOrder,price,quantity,description}=product
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
            <div className='getProduct border'>
                <div className='getProduct-image'>
                <img className='img-fluid' src={picture} alt="" />
                </div>
                <h3>{name}</h3>
                <p>{minimumOrder}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p className='pt-2 pb-5'>{description?.slice(0,130)}.....</p>
            </div>
        </div>
    );
};

export default GetProduct;