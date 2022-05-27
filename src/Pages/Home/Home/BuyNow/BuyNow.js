import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';



const BuyNow = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [quantity, setQuantity] = useState(100)
    const [available, setAvailable] = useState(500)
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/buyNow/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    const purchase = {
        name,
        email,
        address,
        number,
        quantity,
        available,
    }
    const handleBuy = event => {
        event.preventDefault();
        console.log(name, email, address, number, quantity)

        if (quantity < 100) {
            toast.error('sorry you cannot order less than 100')
        }
        setAvailable(tool.available)
        if (quantity > available) {
            toast.error(`Sorry, you can not buy more than ${tool.available}`)
        }
        if ((quantity <= available) && ( quantity >= 100)) {
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast('Item added to your purchase list, now pay to confirm')
                }
            })
            
        }
        else {
            toast.error('you cannot buy more than available or less than 100')
        }
        event.target.value = '';
        // clearInput()
    }


    return (
        <div>
            <div className="container">
                <div className="row my-5 gx-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row shadow p-5">
                            <div className="col-lg-6">
                                <img className='img-fluid' src={tool.img} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h5 className='py-1'>{tool.name}</h5>
                                <p>{tool.dis}</p>
                                <h6>Price: {tool.price} $ per unit</h6>
                                <h6>Minimum Order: {tool.min_order} units</h6>
                                <h6>Available Quantity: {tool.available}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 shadow p-5">
                        <Form onSubmit={handleBuy} className='w-75 mx-auto'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" onBlur={(e) => setName(e.target.value)} placeholder={user?.displayName} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" value={user?.email} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" onBlur={(e) => setAddress(e.target.value)} placeholder="Address" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number" onBlur={(e) => setNumber(e.target.value)} placeholder="Phone Number" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number" onBlur={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Buy Now
                            </Button>
                        </Form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;