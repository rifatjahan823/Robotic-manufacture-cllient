import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import AllOrderRow from './AllOrderRow';

const AllOrder = () => {
         //use react query
         const {data:orders,isLoading,refetch}=useQuery(('orders'),()=> fetch(`http://localhost:5000/orders`)
         .then(res=>res.json()))

         if(isLoading){
             return<Loading></Loading>
         }


    return (
        <div className='container'>
    <div class="table-responsive">
     <table class="table">
     <thead>
         <tr>
         <th scope="col">Product Name</th>
         <th scope="col">Price</th>
         <th scope="col">Quantiy</th>
         <th scope="col">Payment</th>
         <th scope="col">Cancel</th>
         </tr>
     </thead>
     <tbody>
  
     {
       orders?.map((order,)=><AllOrderRow
       key={order._id}
       order={order}
       refetch={refetch}
       ></AllOrderRow>)
     }
   
</tbody>
     </table>
     </div>
     </div>
    );
};

export default AllOrder;