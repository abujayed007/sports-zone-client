import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
            <Slider></Slider>
            <About></About>
            </div>
        </div>
    );
};

export default Home;