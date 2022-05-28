import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [purchaseItems, setPurchaseItems] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPurchaseItems(data))
        }
    }, [user])
    return (
        <div className='ms-5 w-100'>
            <h2>My Orders: {purchaseItems.length}</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Product Name</th>
                        <th>Order AMount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchaseItems.map((purchaseItem, index) => <tr>
                            <td>{index+1}</td>
                            <td>{purchaseItem.itemName}</td>
                            <td>{purchaseItem.amount}</td>
                            <td>Unpaid</td>
                            <td>DELETE</td>
                        </tr>)
                    }
    
                </tbody>
            </Table>

        </div>
    );
};

export default MyOrders;