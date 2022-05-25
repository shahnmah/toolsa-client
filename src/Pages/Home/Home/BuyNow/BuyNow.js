import React from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
    const { toolId } = useParams()
    return (
        <div>
            <h1>Buy now {toolId}</h1>
        </div>
    );
};

export default BuyNow;