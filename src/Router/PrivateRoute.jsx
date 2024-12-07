


// import React, { useContext } from "react";
// import { Navigate, } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

  

//   if(user && user?.email ){
//    return children;
//   }
//   return <Navigate to={"/login"}>
    
//   </Navigate>
// };

// export default PrivateRoute;





// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>;  // Optionally show a loading spinner while checking auth state
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;  // Redirect to login if no user is logged in
//   }

//   return children;  // Render children if user is logged in
// };

// export default PrivateRoute;
















import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;


