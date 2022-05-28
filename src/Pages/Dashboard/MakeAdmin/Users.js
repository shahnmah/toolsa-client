import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Users = ({ user, refetch}) => {
    const {email, role} = user

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            toast.success('Admin added successful')
        })
    }
    return (
        <tr>
            <td>1</td>
            <td>{email}</td>
            <td>{(role === 'admin') ? <button className='btn btn-success btn-sm'>Admin</button>: <button onClick={makeAdmin} className='btn btn-warning btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-danger btn-sm'>Delete</button></td>
            <ToastContainer/>
        </tr>
    );
};

export default Users;