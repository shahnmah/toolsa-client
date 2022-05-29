import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const OrderList = ({ purchaseItem, refetch, index }) => {
    const { paid ,itemName, amount, _id} = purchaseItem
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCancel = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
        toast.success("Item Deleted Successfully")
        handleClose();
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{itemName}</td>
            <td>{amount}</td>
            {/* <td><button className='btn btn-success btn-sm'>Pay Now</button></td> */}
            <td><Link to={`/dashboard/payment/${_id}`} role='button' className='btn btn-success btn-sm'>Pay Now</Link></td>
            <td><button onClick={handleShow} className='btn btn-danger btn-sm'>CANCEL</button></td>
            <ToastContainer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure, you want to cancel this order?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={(e)=>handleCancel(_id)}>
                        Yes Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default OrderList;