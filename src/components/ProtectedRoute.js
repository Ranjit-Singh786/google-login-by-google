import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('accessToken');
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
