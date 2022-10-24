import React from 'react';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='bg' style={{ 
                backgroundImage: `url("https://thumbs.dreamstime.com/b/assorted-sports-equipment-black-11153245.jpg")`
                }}>
                Hello World
            </div>
        </div>
    );
};

export default Home;