// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
