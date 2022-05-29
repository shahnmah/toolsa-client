import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import OrderList from './OrderList';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const {data: purchaseItems, isLoading, refetch} = useQuery(['purchaseItems', user.email], ()=> fetch(`https://mysterious-anchorage-92670.herokuapp.com/purchase?email=${user.email}`).then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='ms-5 w-100'>
            <h2>My Orders: {purchaseItems.length}</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchaseItems.map((purchaseItem, index)=> <OrderList key={purchaseItem._id} purchaseItem={purchaseItem} refetch={refetch} index={index}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;