import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Location from '../Location/Location';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <BusinessSummary/>
            <Location/>
        </div>
    );
};

export default Home;