import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const NotFoundPage = () => {
  const navigate = useNavigate(); // Get the navigate function

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-800">404</h1>
        <p className="text-2xl text-blue-800 mb-4">Page Not Found</p>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={goHome}
          className="px-6 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
