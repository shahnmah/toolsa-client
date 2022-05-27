import React, { useState } from 'react';
import { Button, Form, Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [customer_review, SetCustomer_review] = useState('')
    const [rating, setRating] = useState('')
    
    const clearInput = () =>{
        setName('');
        setImg('');
        SetCustomer_review('');
        setRating('');
    }
    const handleAddReview = event => {
        event.preventDefault();

        if(name && img && customer_review && rating){
            fetch('http://localhost:5000/addreview',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({name, img, customer_review, rating})
            })
           .then(res => res.json())
          toast.success("Review Added Successfully")
        }
        else{
            toast.error("Please Full Fill All Field")
            event.target.reset();
        }

        event.target.reset();
        clearInput()
    }
    return (
        <div className='ms-5'>
            <h4>Add a Review</h4>

            <Form onSubmit={handleAddReview}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setImg(e.target.value)} type="text" placeholder="Your Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>SetCustomer_review(e.target.value)} type="text" placeholder="Your Review" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setRating(e.target.value)} type="number" placeholder="Rating out of 5" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <ToastContainer/>
            </Form>
        </div>
    );
};

export default AddReview;