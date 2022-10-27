import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderSpinner from '../../components/LoaderSpinner';
import { AuthContext } from '../../contexts/authprovider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user ,loading}=useContext(AuthContext)
    const location = useLocation()
    if(loading){
        <LoaderSpinner></LoaderSpinner>
    }
  if(user && user.uid){
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;