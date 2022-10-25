import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
            <Slider></Slider>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;