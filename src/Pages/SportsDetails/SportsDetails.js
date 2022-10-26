import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Collapse, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';



const SportsDetails = () => {
    const sportsDetails = useLoaderData()

    const { name, benifits, title, image } = sportsDetails

    return (
     <Row>
        
        <Col className='d-flex justify-content-center'>
        <Card className="mt-3 w-50">
                    <Card.Header>{name}</Card.Header>
                    <Card.Img src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          <strong>Health Benifits:</strong>  {benifits}
                        </Card.Text>
                    </Card.Body>
                </Card>
            
        </Col>
     </Row>
    );
};

export default SportsDetails;