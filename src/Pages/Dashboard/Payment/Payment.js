import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {
    const { id } = useParams();

    const { data: purchaseItems, isLoading } = useQuery('purchases', () => fetch(`http://localhost:5000/purchase/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h4>Pay now for {id}</h4>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Card variant="Light">
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
                    <Card variant="Light">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Payment;