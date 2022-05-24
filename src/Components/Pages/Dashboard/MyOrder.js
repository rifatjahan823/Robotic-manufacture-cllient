import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

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
           console.log('data',data)
           setOrder(data)
         })
        }
     },[user])

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
        order?.map((order,index)=><tr key={index}>
            <th>{index+1}</th>
            <td>{order.userName}</td>
            <td>{order.date}</td>
            <td>
              {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

              {(order.price && order.paid) && <div>
                <p><span className='text-successs'>Paid</span></p>
                <p>TransactionId:<span className='text-successs'>{order.transactionId}</span></p>
                </div>}
              </td>
              <td>
              {(order.price && !order.paid) && <button   className='btn btn-xs btn-danger'>cancel</button>}
              </td>
          </tr>)  
      }
  </tbody>
        </table>
        </div>
        </div>
    );
};

export default MyOrder;