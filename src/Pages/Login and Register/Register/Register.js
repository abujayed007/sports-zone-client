import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { signUp, updateUserProfile } = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value


        signUp(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateProfile(name, photoURL)
                form.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
        if (password.length < 6) {
            setError('Password must be 6 charecter')
        }

    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='d-flex justify-content-center mt-5 '>
            <Form onSubmit={handleSubmit} style={{ width: '500px' }} className="shadow-lg p-5 rounded">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required name="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control required name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                    <Card.Text className='text-danger'>
                        {error}
                    </Card.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Register;