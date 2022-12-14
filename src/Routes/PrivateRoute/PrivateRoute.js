import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)

  const location = useLocation()

  if(loading){
    return <Spinner style={{marginTop:'200px'}} className='d-flex mx-auto' animation="border" variant="success" />
  }

  if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  return children
};

export default PrivateRoute;