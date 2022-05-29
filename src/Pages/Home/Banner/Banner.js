import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/BcgB4Z7/bg2-overlay.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>World Leader in Tools</h1>
                    <h5>Toolsa Tools offers you a range of composite Hand tools & other specialty tools for use in manufacturing, maintenance or repair processes to get projects done faster, while saving you money.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/7SXVJP2/bg1-overlay.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1>World Leader in Tools</h1>
                    <h5>Toolsa Tools offers you a range of composite Hand tools & other specialty tools for use in manufacturing, maintenance or repair processes to get projects done faster, while saving you money.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;