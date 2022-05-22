import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Order = () => {
    const {Id}=useParams();
    //use react query
    const {data:product,isLoading}=useQuery(('product'),()=> fetch(`http://localhost:5000/productid/${Id}`)
    .then(res=>res.json()))
    if(isLoading){
      return<Loading></Loading>
     }
    return (
        <div>
            {product.name}
    
        </div>
    );
};

export default Order;