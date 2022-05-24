import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Review = () => {
    const onSubmit = event => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const description = event.target.description.value;
        const review={rating,description}

        fetch('http://localhost:5000/review',{
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
    };
    return (
        <div>
        <div className='mx-auto form-container px-3'>
           <h2>Add Your Review</h2>
           <Form onSubmit={onSubmit}> 
           <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control  type="number" name="rating" min="1" max="5" placeholder="rating" required/>
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"name="description" placeholder="Leave a comment here" required/>
        </Form.Group>
        <input className=' common-button mb-3' type="submit" value="Add" />
        </Form>
    </div>
    </div>
    );
};

export default Review;