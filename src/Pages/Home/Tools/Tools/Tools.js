import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from '../Tool/Tool';

const Tools = () => {
    
    const { data: tools, isLoading } = useQuery(['tools'], () => fetch('https://mysterious-anchorage-92670.herokuapp.com/tool')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-5'>
            <div className="container">
                <h2>Our Products</h2>
                <div className="row gx-4">
                    {
                        tools.map(tool=> <Tool key={tool._id} tool={tool}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;