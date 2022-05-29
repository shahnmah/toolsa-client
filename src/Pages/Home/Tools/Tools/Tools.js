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
        <div>
            <div className="container">
                <h2>Products</h2>
                <div className="row g-5">
                    {
                        tools.map(tool=> <Tool key={tool._id} tool={tool}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;