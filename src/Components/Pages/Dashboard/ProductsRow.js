import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ProductsRow = ({product,refetch}) => {
    const {picture,name ,price,_id}=product;
    const handleDelete = (Id)=>{
        fetch(`http://localhost:5000/addProduct/${Id}`,{
            method:"Delete",
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                swal("Hello world!");
                 refetch()
            }
            else{
                toast.error(`Product ${name} Not Deleteed` )     
            }
        })
    }
    return (
        <tr>
        <td><img style={{width:"90px",height:"90px",borderRadius:"50px",border:"1px solid #CDCCCC"}} className='img-fluid' src={picture} alt="" /></td>
        <td>{name}</td>
        <td>{price}</td>
        <td><button  onClick={()=> handleDelete(product._id)} className="btn btn-danger">Remove User</button></td> 
    </tr>
    );;
};

export default ProductsRow;