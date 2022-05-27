import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';



const BuyNow = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({});
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/buyNow/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 shadow">
                            <Form className='w-75 mx-auto'>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder={user?.displayName}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" value={user?.email} disabled />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Address" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="number" placeholder="Phone Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="number" placeholder="Quantity" required/>
                                </Form.Group>
                                <Button className='w-100' variant="primary" type="submit">
                                    Buy Now
                                </Button>
                            </Form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;