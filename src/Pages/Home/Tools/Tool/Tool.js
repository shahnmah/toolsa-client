import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, dis, min_order, available, price } = tool;
    const navigate = useNavigate()
    const navigateToBuy = id => {
        navigate(`/buyNow/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 border rounded'>
            <div className=''>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div>
                    <h5 className='py-1'>{name}</h5>
                    <p>{dis}</p>
                    <h6>Price: {price} $ per unit</h6>
                    <h6>Minimum Order: {min_order} units</h6>
                    <h6>Available Quantity: {available}</h6>
                    <button onClick={() => navigateToBuy(_id)} className='btn btn-primary px-4 my-2'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;