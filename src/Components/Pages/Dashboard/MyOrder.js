import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user]=useAuthState(auth)
    const [order,setOrder]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
         fetch(`http://localhost:5000/order?userEmail=${user.email}`,{
           method:"GET",
           headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
           },
         })
         .then(res=> {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
           return res.json()
       })
         .then(data=>{
           setOrder(data)
         })
        }
     },[user,order])


    return (
        <div className='container'>
           <h2>Myorder{order.length}</h2> 
       <div class="table-responsive">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
     
        {
          order?.map((orders,)=><OrderRow
          key={orders._id}
          orders={orders}
          ></OrderRow>)
        }
      
  </tbody>
        </table>
        </div>
        </div>
    );
};

export default MyOrder;