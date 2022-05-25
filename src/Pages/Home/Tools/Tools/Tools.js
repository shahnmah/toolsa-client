import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/tool')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div>
            <div className="container">
                <h2>Products</h2>
                <div className="row">
                    {
                        tools.map(tool=> <Tool key={tool._id} tool={tool}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;