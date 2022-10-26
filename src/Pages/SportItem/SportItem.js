import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './SportItem.modules.css'

const SportItem = ({ sport }) => {
    const { name, title, id, image, benifits } = sport;

    return (
        <div className='col p-2'>
            <Card className='' style={{ height: '500px' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Img variant="top" style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title style={{ color: 'darkolivegreen' }} className='fs-5'>{title}</Card.Title>
                    <Card.Text style={{color:'lightslategray'}}>
                        {
                            benifits.length > 200 ?

                                <p><strong>Health Benifits:</strong> {benifits.slice(0, 200) + '...'}<Link to={`/sports/${name}`}>Read More</Link></p>
                                :
                                <p> <strong>Health Benifits:</strong> {benifits}</p>
                        }
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SportItem;