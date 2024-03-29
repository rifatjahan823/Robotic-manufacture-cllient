import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {
    const [user]=useAuthState(auth);
    const imgStorageKEY ='d6529dc3e2b5077433b72e6ff3596019';
      //for from
  const { register, formState: { errors }, handleSubmit } =useForm();
 const onSubmit = async data => {
   const image = data.image[0];
    const formData= new FormData();
    formData.append('image',image)
    const url =`https://api.imgbb.com/1/upload?key=${imgStorageKEY}`;
    fetch(url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.success){
            const picture = result.data.url;
            const review = {
                Username:user?.displayName,
                picture:picture,
                rating:data.rating,
                description:data.productDesciption

            }
            //send to your database
            fetch('https://vast-tor-95198.herokuapp.com/review',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(review)
            })
            .then(res=>res.json())
            .then(result=>{
               toast('Add Your Review')
            })
        }
    })
  };

    return (
        <div>
        <div className='mx-auto px-3'>
           <h2>Add Your Review</h2>
           <form onSubmit={handleSubmit(onSubmit)}>     
        {/* ----------------Name--------------- */}
            <div className="">
            <label for="inputName"className="form-label">Name</label>
            <input type="text" value={user?.displayName} readOnly className="form-control" id="inputName" placeholder="name"{...register("name",{
                 })}/>
                 </div>     
             {/* ----------image fild-----------*/}
                 <div className="">
                 <label for="inputName" className="form-label">Product Image</label>
                 <input type="file" className="form-control" id="inputName" placeholder="Product Image"{...register("image",{
                       required:{
                        value:true,
                        message:'Please Give Picture file' 
                     },
                 })}/>
                 <label className="label">
                 {errors.image?.type === 'required' && <span className="label-text-alt text-danger">{errors.image.message}</span>}
                 </label>
             </div>

                
            {/* ----------------Rating--------------- */}
            <div className="">
                <label for="inputName" className="form-label">Product Rating</label>
                 <input type="number" className="form-control" id="inputName" placeholder="Quantity"{...register("rating",{
                    required:{
                     value:true,
                     message:'Please give rating' 
                     },
                 })}/>
                  <label className="label">
                 {errors.rating?.type === 'required' && <span className="label-text-alt text-danger">{errors.rating.message}</span>}
                 </label>
                 </div>
 
            {/* ----------------Product Description-------------- */}
                <div className="">
                <label for="floatingTextarea2">Product Desciption</label>
                    <textarea className="form-control" placeholder="Leave a description here" id="floatingTextarea2" style={{height:"100px"}}{...register("productDesciption",{
                    required:{
                     value:true,
                     message:'Please give Product productDesciption' 
                     },
                 })}></textarea>
                  <label className="label">
                 {errors.productDesciption?.type === 'required' && <span className="label-text-alt text-danger">{errors.productDesciption.message}</span>}
                 </label>
                 </div> 
             <input className=' common-button mb-3' type="submit" value="Add" />
             </form>
  
    </div>
    </div>
    );
};

export default Review;