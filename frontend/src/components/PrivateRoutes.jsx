import React from 'react';
import { Navigate } from 'react-router-dom';
import Toast from './Toast';



const user = localStorage.getItem('user');


const PrivateRoute = ({ children}) => {
      
  if (user) {
    return children
  }

  
  return <>
  {alert('You are not logged in')}

  <Navigate to="/" />

  
  </>
}

export default PrivateRoute;
