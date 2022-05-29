import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [min_order, setMin_order] = useState(100); 
    const [available, setAvailable] = useState(0); 
    const [price, setPrice] = useState(0); 
    const [dis, setDis] = useState(''); 
    

    const clearInput = () =>{
        setName('');
        setImg('');
        setMin_order('');
        setAvailable('');
        setPrice('');
        setDis('');
    }

    const handleProductAdd = (event) =>{
        event.preventDefault();
        if(name && img && dis && min_order && available && price){
            fetch('https://mysterious-anchorage-92670.herokuapp.com/addproduct',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify({name, img, dis, min_order, available, price})
            })
           .then(res => res.json())
          toast.success("Product Added Successfully")
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
            <h4>Add A Product</h4>

            <Form onSubmit={handleProductAdd} className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setName(e.target.value)} type="text" placeholder="Product Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setImg(e.target.value)} type="text" placeholder="Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setMin_order(e.target.value)} type="number" placeholder="Minimum Order Quantity" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setAvailable(e.target.value)} type="number" placeholder="Available Quantity" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={(e)=>setPrice(e.target.value)} type="number" placeholder="Price" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onBlur={(e)=>setDis(e.target.value)} placeholder='Product Description' as="textarea" rows={3} required/>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default AddProduct;