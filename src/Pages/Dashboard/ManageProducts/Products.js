import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Products = ({tool, refetch, index}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {name, _id} = tool


    const handleDelete = id => {
        fetch(`https://mysterious-anchorage-92670.herokuapp.com/tools/${id}`, {
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
            <td>{name}</td>
            <td>{_id}</td>
            <td><button onClick={handleShow} className='btn btn-danger btn-sm'>Delete</button></td>
            <ToastContainer/>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure, you want to cancel this order?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={(e) => handleDelete(_id)}>
                        Yes Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default Products;