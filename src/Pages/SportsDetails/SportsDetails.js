import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Collapse, Row } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print'





const SportsDetails = () => {
    const sportsDetails = useLoaderData()

    const { name, benifits, title, image } = sportsDetails;

    const componentRef = useRef()

    const handlePdf = useReactToPrint({
        content: () => componentRef.current,
    })


    return (
        <Row>
            <Col ref={componentRef} className='d-flex justify-content-center'>
                <Card className="mt-3 w-50">
                    <Card.Header>
                        {name}
                    </Card.Header>
                    <button className='bg-info border-none' onClick={handlePdf}>Print Pdf</button>
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