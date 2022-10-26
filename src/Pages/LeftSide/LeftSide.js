import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = ({sport}) => {
    const {name} = sport

    return (
        <div className='name'> 
            <Link className='fs-3' to={`/sports/${name}`}>{sport.name}</Link>
        </div>
    );
};

export default LeftSide;