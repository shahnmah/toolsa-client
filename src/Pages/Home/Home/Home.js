import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Location from '../Location/Location';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Tools/>
            <BusinessSummary/>
            <Location/>
            <Reviews/>
        </div>
    );
};

export default Home;