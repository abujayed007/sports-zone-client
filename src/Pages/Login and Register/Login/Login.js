import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthProvider, { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaFacebookSquare, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error))
    }
    const googleProvider  = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))

    }
    const githubProvider = new GithubAuthProvider()

    const handleGithubsignIn = () =>{
        githubLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate('/')

        })
        .catch(error => console.error(error))
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form onSubmit={handleSubmit} style={{ width: '500px' }} className="shadow-lg p-5 rounded">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p>Don't have any account <Link className='text-info' to='/register'>Register Now</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
              <div className='d-flex justify-content-center'>
              <ButtonGroup className='mb-4' vertical>
                    <Button onClick={handleGoogleSignIn} variant='outline-primary'><FaGoogle></FaGoogle> Log in Google</Button>
                    <Button onClick={handleGithubsignIn} className='mt-3' variant='outline-dark'><FaGithub></FaGithub> Log in Github</Button>
                </ButtonGroup>
              </div>
            </Form>
        </div>
    );
};

export default Login;