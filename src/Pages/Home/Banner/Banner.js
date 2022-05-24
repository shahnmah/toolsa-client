import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgImg from '../../../assets/images/bg1.jpg'
import bgImg2 from '../../../assets/images/bg2.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImg}
                    alt="First slide"
                />
                <Carousel.Caption style={{ top: '40%'}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImg2}
                    alt="Second slide"
                />

                <Carousel.Caption style={{top: '40%'}}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;