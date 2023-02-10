import React from 'react';
import Banner from '../../component/Banner/Banner';
import Header from '../../component/Header/Header';

const Home = () => {
    return (
        <div>
            <div className='banner-bg'>
                <Header></Header>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;