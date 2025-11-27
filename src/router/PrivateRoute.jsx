import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ childern }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (user) {
    return childern;
  }

  return <Navigate to="/login"> </Navigate>;
};

export default PrivateRoute;
