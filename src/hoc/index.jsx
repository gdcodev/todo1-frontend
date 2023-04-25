/* eslint-disable no-undef */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { LOGIN_PATH } from '../routes/path';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = localStorage.getItem('accessToken');
    if (isAuthenticated) {
      return <Component />;
    }
    return <Navigate to={LOGIN_PATH} replace />;
  };

  return AuthRoute;
};

export default withAuth;
