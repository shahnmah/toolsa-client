import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Users from './Users';

const MakeAdmin = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='ms-5'>
            <h4>All Users {users.length}</h4>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <Users key={user._id} user={user} refetch={refetch}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MakeAdmin;