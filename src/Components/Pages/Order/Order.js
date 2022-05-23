import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Order = () => {
    const {Id}=useParams();
    //use react query
    const {data:product,isLoading,refetch}=useQuery(('product'),()=> fetch(`http://localhost:5000/productid/${Id}`)
    .then(res=>res.json()));

   const [user]=useAuthState(auth)
    const[email,setEmail]=useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    const[quantit,setQuantity]=useState('');

    let price = quantit*product?.price;
    // const result=()=>{
    //     if(quantity>product.minimumOrder || quantity===product.minimumOrder ){
    //         toast('Thanks for');
    //     }
    // }
    const handleName =(event)=>{
        setName(event.target.value)
    };
    const handlPhone =(event)=>{
        setPhone(event.target.value)
    };
    const handleAddress =(event)=>{
        setAddress(event.target.value)
    };
    const HandleQuantity=(event)=>{
        setQuantity(event.target.value)
    }
    const loginHandle =event=>{
        event.preventDefault();
        const info={email,name,phone,address,quantit,price}
        console.log(info)
    }

//-------------------------------------------
//-------------------------------------------
const updateDeliver =()=>{
    const quantity = product.quantity-quantit;
    console.log(quantity)
try{
    const getdata = async ()=>{
    const res =await axios.put(`http://localhost:5000/inventoryUpdate/${Id}`,
      {quantity}
      );
    }
    getdata()
  }

catch(error){
       console.error('Error:', error);
     };

     refetch()
}

    if(isLoading){
        return<Loading></Loading>
       }

    return (
        <div> 
      <div className='container'>
    {/* ------inventory details----------      */} 
    <div className='border border-secondary my-5 p-3 '> 
      <div className='row  g-4  align-items-center '>
  
     {/* ------inventory image----------      */}     
        <div className="col-12 col-lg-5 col-md-5 ">
            <img className='img-fluid' src={product.picture} alt="" />
        {/*------ description-part ------------*/}
         <p className='pt-2 ' style={{color:"#565656",fontSize: "14px",fontWeight: "600"}}>{product.description}</p>
        </div>
      {/* ------inventory content----------      */} 
      <div className="col-12 col-lg-7 col-md-7 ">
      <div className='card-body'>
         <h3>{product.name}</h3>
       {/*------  price ------------*/} 
       <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Price :</span> {product.price}</p> 

      {/*------ quantity ------------*/} 
      {
        <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Quantity :</span> {product.quantity}</p>
      } 
      {/*------ minimumOrder------------*/} 
      {
        <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>MinimumOrder:</span> {product.minimumOrder}</p>
      } 
      <button onClick={updateDeliver}>update</button>
      <div className='border p-2'>
        <Form onClick={updateDeliver} onSubmit={loginHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={ handleName}type="name" readOnly placeholder="Name" value={user?.displayName}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" readOnly placeholder="Email"value={user?.email}  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={ handlPhone}type="number" placeholder="Phone Number" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={ handleAddress}  type="text" placeholder="Address" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control onChange={ HandleQuantity}  type="number" placeholder="Quantity" min={product.minimumOrder} max={product.quantity}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control  type="number" placeholder="price" value={price} required/>
            </Form.Group>
         
            <Button className='w-75 mx-auto d-block mb-2' variant="success " type="submit">
                Check Out
            </Button>
        </Form>
        </div>
        <ToastContainer />

              
      {/*------ button-part ------------*/}
 
      </div>  
      </div>    
    </div>
    </div>
    </div>
    </div>
    );
};

export default Order;