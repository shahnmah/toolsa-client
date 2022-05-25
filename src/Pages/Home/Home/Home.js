import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Location from '../Location/Location';
import Tools from '../Tools/Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Tools/>
            <BusinessSummary/>
            <Location/>
        </div>
    );
};

export default Home;