import React from 'react';
import Banner from '../../component/Banner/Banner';
import Header from '../../component/Header/Header';
import Project from '../../component/Project/Project';
import Service from '../../component/Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Project></Project>
        </div>
    );
};

export default Home;