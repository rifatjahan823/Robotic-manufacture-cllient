import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import GetProduct from './GetProduct/GetProduct';

const Product = () => {
        //use react query
        const {data:products,isLoading}=useQuery(('products'),()=> fetch(`http://localhost:5000/product`)
        .then(res=>res.json()))
        if(isLoading){
            return<Loading></Loading>
        }
    return (
        <div className='container py-5'>
            <h2 className='product-title'>Product</h2>
            <div className='row g-4'>
                {
                products?.map(product=><GetProduct
                product={product}
                key={product._id}>
                </GetProduct>)   
                }
            </div>    
        </div>
    );
};

export default Product;