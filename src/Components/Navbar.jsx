



import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/DALL·E 2024-11-20 18.39.21 - A vibrant, modern logo for 'Lingo Bingo,' a vocabulary learning application. The logo should feature a playful combination of a globe to represent lan.webp"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  return (
    <header className="bg-gradient-to-tr from-blue-200 to-blue-600 text-blue-800 shadow-lg py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        {/* Logo Section */}
        <div className="text-3xl font-bold mb-4 md:mb-0">
          <h1 className="animate__animated animate__pulse animate__infinite	infinite animate__slow ml-4 "> <h2 className="flex justify-center"> <img className="w-12 h-12 rounded-full" src={logo} alt="" />Lingo Bingo</h2></h1>
        </div>

        {/* Navbar Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/learning" className="hover:text-gray-300">
            Start Learning
          </NavLink>
          <NavLink to="/tutorials" className="hover:text-gray-300">
            Tutorials
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300">
            About Us
          </NavLink>
          {user && user.email && (
            <NavLink to="/my-profile" className="hover:text-gray-300">
              My Profile
            </NavLink>
          )}
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {user && user.email ? (
            <>
              {/* Welcome Message */}
              <div className="hidden md:block">
                Welcome, <span className="font-bold">{user.displayName || "user"}</span>
              </div>
              {/* User Image */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-10 h-10  bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">U</span>
                </div>
              )}
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-gradient-to-tr from-blue-400 to-blue-300 font-semibold text-xl  text-blue-800 px-4 py-2 rounded shadow hover:bg-blue-200 "
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-gradient-to-tr from-blue-400 to-blue-300 font-semibold text-xl text-blue-900 px-4 py-2 rounded shadow hover:bg-blue-200 mr-10"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Navbar;



