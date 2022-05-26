import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/buyNow/${toolId}`)
        .then(res => res.json())
        .then(data => setTool(data))
    },[])
    
    return (
        <div>
            <h1>Buy now {toolId}</h1>
        </div>
    );
};

export default BuyNow;