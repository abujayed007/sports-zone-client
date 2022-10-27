import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SportItem from '../SportItem/SportItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../LeftSide/LeftSide';

const Sports = () => {
    const sports = useLoaderData()
    console.log(sports)
    return (
        
    <Row className='mt-2 p-4'>
        <Col className="shadow-lg text-center p-3 rounded" sm={4}>
            <h1>ALl Categories</h1>
          
           {
                sports.map(sport => <LeftSide key={sport.id} sport={sport}></LeftSide>)
            }
           
        </Col>
        <Col className='row row-cols-md-2 row-cols-1' sm={8}> 
             {
                sports.map(sport => <SportItem key={sport.id} sport={sport}></SportItem>)
             }
        </Col>
    </Row>
            
            
    );
};

export default Sports;