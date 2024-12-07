



// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { updateProfile } from 'firebase/auth';

// const Register = () => {
//   const { createNewUser, googleLogin, setUser } = useContext(AuthContext);
//   const [error, setError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData(e.target);
//     const name = form.get('name');
//     const photo = form.get('photo');
//     const email = form.get('email');
//     const password = form.get('password');

//     // Password validation
//     const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//     if (!passwordValidation.test(password)) {
//       setPasswordError(
//         'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
//       );
//       return;
//     }

//     try {
//       const result = await createNewUser(email, password);
//       const user = result.user;

//       // Update user profile with name and photo URL
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photo,
//       });

//       setUser({
//         ...user,
//         displayName: name,
//         photoURL: photo,
//       });

//       toast.success('Registration successful!');
//       navigate('/'); // Redirect to home page
//     } catch (error) {
//       const errorMessage = error.message;
//       setError(errorMessage);
//       toast.error(`Registration failed: ${errorMessage}`);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await googleLogin();
//       const user = result.user;
//       setUser(user);
//       toast.success('Google login successful!');
//       navigate('/'); // Redirect to home page
//     } catch (error) {
//       const errorMessage = error.message;
//       setError(errorMessage);
//     }
//   };

//   return (
//     <div>
//       <div className="hero ">
//         <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
//           <div className="card w-[600px] h-[900px] max-w-md shadow-2xl bg-white p-6 rounded-lg">
//             <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">Register now!</h1>
//             <form onSubmit={handleSubmit} className="card-body">
//               {error && <div className="text-red-500 mb-4">{error}</div>}
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photo"
//                   placeholder="Photo URL"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control mb-6">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="input input-bordered w-full"
//                   required
//                 />
//                 {passwordError && <div className="text-red-500 mt-2">{passwordError}</div>}
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary w-full text-white" type="submit">
//                   Register
//                 </button>
//               </div>
//             </form>
//             <p className="text-center mt-4 text-blue-950 text-lg font-semibold">
//               Already have an account?{' '}
//               <Link className="text-white" to="/login">
//                 <button className="bg-gradient-to-r from-blue-400 to-blue-300 rounded-full px-4 py-2 text-blue-700 font-semibold">
//                   Login
//                 </button>
//               </Link>
//             </p>
//             <div className="divider">OR</div>
//             <button
//               className="btn btn-primary text-xl text-white w-full"
//               onClick={handleGoogleLogin}
//             >
//               Register with Google
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;

















import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createNewUser, googleLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // Password validation
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    try {
      const result = await createNewUser(email, password);
      const user = result.user;

      // Update user profile with name and photo URL
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      setUser({
        ...user,
        displayName: name,
        photoURL: photo,
      });

      toast.success('Registration successful!');
      navigate('/'); // Redirect to home page
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
      toast.error(`Registration failed: ${errorMessage}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      setUser(user);
      toast.success('Google login successful!');
      navigate('/'); // Redirect to home page
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Helmet>
        <title>Lingo Bingo | Register</title>
      </Helmet>
      <div className="container max-w-4xl mx-auto p-4 flex flex-col lg:flex-row-reverse items-center justify-center">
        <div className="w-full lg:w-2/3 shadow-lg bg-gradient-to-r from-blue-400 to-blue-300 p-8 rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
            Register now!
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              {passwordError && <div className="text-red-500 mt-2">{passwordError}</div>}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full text-white text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-blue-950 text-lg font-semibold">
            Already have an account?{' '}
            <Link to="/login" className="text-white">
              <button className="bg-gradient-to-r from-blue-400 to-blue-300 rounded-full px-4 py-2 text-blue-700 font-semibold">
                Login
              </button>
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-primary w-full text-white font-semibold text-xl bg-gradient-to-r from-blue-500 to-blue-600"
            onClick={handleGoogleLogin}
          >
            Register with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;









