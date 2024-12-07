

import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading user data...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">No user data available. Please <NavLink to='/login'><button className="btn btn-primary">Login</button></NavLink></p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4 lg:h-[700px]">
        <Helmet>
          <title>Lingo Bingo | My Profile</title>
        </Helmet>
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome, {user.displayName || "User"}!
        </h1>
        <div className="max-w-md mx-auto bg-blue-300 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-32 h-32 rounded-full mx-auto border border-gray-200"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-gray-600">No Image</span>
                </div>
              )}
            </div>
            <div className="text-center text-lg">
              <p className="mb-2 font-medium">
                <span className="text-gray-600">Name:</span> {user.displayName || "user"}
              </p>
              <p className="mb-2 font-medium">
                <span className="text-gray-600">Email:</span> {user.email}
              </p>
            </div>
            <div className="text-center mt-6">
              <NavLink
                to="/update-profile"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200"
              >
                Update Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;







