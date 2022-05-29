import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2lTBEZw3bdVn9Vs8mFQmAVg2Wq2Woljk1yfVoJkvklQHHcxyDk46AMWyZvDbyeMctan39UMo4MdcE5zJXKjJ1g00WX8rAmln');

const Payment = () => {

    const { id } = useParams();

    const { data: purchaseItems, isLoading } = useQuery('purchases', () => fetch(`https://mysterious-anchorage-92670.herokuapp.com/purchase/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h4>Pay your Order</h4>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Card variant="Light" className='shadow p-3'>
                        <Card.Body>
                            <Card.Title>Order ID: {purchaseItems._id} </Card.Title>
                            <h6>Product Name: {purchaseItems.itemName}</h6>
                            <h6>Quantity: {purchaseItems.quantity}</h6>
                            <h6>Payable Amount: {purchaseItems.amount}</h6>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Card variant="Light" className='shadow p-3'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm purchaseItems={purchaseItems} />
                        </Elements>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Payment;