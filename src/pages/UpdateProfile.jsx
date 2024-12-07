// import React from "react";

// const UpdateProfile = () => {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h1 className="text-4xl font-bold text-center mb-8">Update Profile</h1>
//       <p className="text-center">This is where the profile update form will be implemented.</p>
//     </div>
//   );
// };

// export default UpdateProfile;  








import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      navigate("/my-profile");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:h-[800px]">
      <Helmet>
        <title>Lingo Bingo | Update Profile</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8">Update Profile</h1>
      <form onSubmit={handleUpdateProfile} className="max-w-md mx-auto bg-blue-300 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="photoURL">
              Photo URL:
            </label>
            <input
              type="text"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter photo URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="displayName">
              Name:
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200"
            >
              Update Information
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
