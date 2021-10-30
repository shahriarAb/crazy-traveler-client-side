import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Posts from '../Posts/Posts';
import Promise from '../Promise/Promise';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Posts></Posts>
            <Promise></Promise>
        </div>
    );
};

export default Home;