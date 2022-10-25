import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Sports = () => {
    const sports = useLoaderData()
    console.log(sports)
    return (
        <div>
            <h2>Our All Packages</h2>
            {

            }
        </div>
    );
};

export default Sports;