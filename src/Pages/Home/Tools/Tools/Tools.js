import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect( ()=>{
        fetch('https://mysterious-anchorage-92670.herokuapp.com/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
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