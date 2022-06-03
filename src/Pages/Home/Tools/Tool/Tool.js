import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, dis, min_order, available, price } = tool;
    const navigate = useNavigate()
    const navigateToBuy = id => {
        navigate(`/buyNow/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 border rounded text-center p-0'>
            <div>
                <div style={{backgroundColor:'rgba(51, 102, 204,.1)'}}>
                    <img style={{width:'65%'}} className='img-fluid' src={img} alt="" />
                </div>
                <div className='bg-light'>
                    <h5 className='py-2'>{name}</h5>
                    <p>{dis}</p>
                    <h6>Price: {price} $ per unit</h6>
                    <h6>Minimum Order: {min_order} units</h6>
                    <h6>Available Quantity: {available}</h6>
                    <button style={{backgroundColor:'#3366cc'}} onClick={() => navigateToBuy(_id)} className='btn px-4 mt-2 text-white fw-bold w-100'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;