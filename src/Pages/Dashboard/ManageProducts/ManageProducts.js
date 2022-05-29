import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Products from './Products';

const ManageProducts = () => {
    const {data: tools, isLoading, refetch} = useQuery('tools', ()=> fetch('http://localhost:5000/tools').then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h4>Manage Products</h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map((tool, index) => <Products key={tool._id} index={index} tool={tool} refetch={refetch}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;