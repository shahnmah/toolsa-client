import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Users from './Users';

const MakeAdmin = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://mysterious-anchorage-92670.herokuapp.com/user').then(res => res.json()))
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
                        users.map((user, index) => <Users key={user._id} user={user} index={index} refetch={refetch}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MakeAdmin;