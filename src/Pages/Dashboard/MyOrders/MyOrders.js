import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [purchaseItems, setPurchaseItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPurchaseItems(data))
        }
    }, [user])
    const handleCancel = id => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        toast.success("Item Deleted Successfully")
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
                        purchaseItems.map((purchaseItem, index) => <tr key={purchaseItem._id}>
                            <td>{index + 1}</td>
                            <td>{purchaseItem.itemName}</td>
                            <td>{purchaseItem._id}</td>
                            <td><button className='btn btn-success btn-sm'>Pay Now</button></td>
                            <td><button onClick={() => handleCancel(purchaseItem._id)} className='btn btn-danger btn-sm'>CANCEL</button></td>
                        </tr>)
                    }
                    {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure, you want to cancel this order?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                </tbody>
            </Table>
            <ToastContainer/>
        </div>
    );
};

export default MyOrders;