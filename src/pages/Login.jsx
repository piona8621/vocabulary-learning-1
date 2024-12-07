





// import React, { useContext, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider'; // Access AuthContext
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Firebase imports

// const Login = () => {
//   const { userLogIn, setUser } = useContext(AuthContext); // Access userLogIn and setUser from AuthContext
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/'; // Save the user's intended route to redirect after login

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     // Login with email and password
//     userLogIn(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user); // Set the user in context
//         toast.success('Login successful!');
//         navigate(from, { replace: true }); // Navigate to the previous route or home page
//       })
//       .catch((error) => {
//         toast.error(`Login failed: ${error.message}`); // Show error message if login fails
//       });
//   };

//   const handleGoogleLogin = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();

//     // Google login with popup
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user); // Set the user in context
//         toast.success('Google login successful!');
//         navigate(from, { replace: true }); // Navigate to the previous route or home page
//       })
//       .catch((error) => {
//         toast.error(`Google login failed: ${error.message}`);
//       });
//   };

//   return (
//     <div className="hero bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <h1 className="text-5xl font-bold text-center">Login</h1>
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//             </div>
//           </form>
//           <p className="text-center mt-4">
//             Don’t have an account?{' '}
//             <Link className="text-blue-600" to="/register">
//               Register
//             </Link>
//           </p>
//           <p className="text-center mt-2">
//             <Link className="text-blue-600" to="/forgot-password">
//               Forgot Password?
//             </Link>
//           </p>
//           <div className="divider">OR</div>
//           <button
//             className="btn btn-outline btn-primary w-full"
//             onClick={handleGoogleLogin}
//           >
//             Login with Google
//           </button>
//         </div>
//       </div>
//       <ToastContainer /> {/* Toast Container to show success/error messages */}
//     </div>
//   );
// };

// export default Login;  




// import React, { useContext, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider'; // Access AuthContext
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Firebase imports
// import Navbar from '../Components/Navbar';

// const Login = () => {
//   const { userLogIn, setUser } = useContext(AuthContext); // Access userLogIn and setUser from AuthContext
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/'; // Save the user's intended route to redirect after login

//   // State to store email for later use
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     // Save the email value in the state
//     setEmail(email);

//     // Login with email and password
//     userLogIn(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user); // Set the user in context
//         toast.success('Login successful!');
//         navigate(from, { replace: true }); // Navigate to the previous route or home page
//       })
//       .catch((error) => {
//         toast.error(`Login failed: ${error.message}`); // Show error message if login fails
//       });
//   };

//   const handleGoogleLogin = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();

//     // Google login with popup
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user); // Set the user in context
//         toast.success('Google login successful!');
//         navigate(from, { replace: true }); // Navigate to the previous route or home page
//       })
//       .catch((error) => {
//         toast.error(`Google login failed: ${error.message}`);
//       });
//   };

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="hero lg:mt-5  ">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-gradient-to-tr from-blue-300 to-blue-600 w-full max-w-sm shrink-0 shadow-2xl">
//           <h1 className="text-5xl font-bold text-center">Login</h1>
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//             </div>
//           </form>
//           <p className="text-center mt-4 text-lg font-semibold text-blue-950">
//             Don’t have an account?{' '}
//             <Link className="text-blue-600" to="/register">
//             <button className='bg-gradient-to-r from-blue-400 to-blue-300 rounded-full px-4 text-blue-700 font-semibold'>Register</button>
//             </Link>
//           </p>
//           <p className="text-center mt-2">
//             <Link
//               className="text-blue-950 font-xl text-lg "
//               to="/forgot-password"
//               state={{ email }} // Pass the email state to the Forgot Password page
//             >
//               Forgot Password?
//             </Link>
//           </p>
//           <div className="divider">OR</div>
//           <button
//             className="btn btn-outline btn-primary w-full"
//             onClick={handleGoogleLogin}
//           >
//             Login with Google
//           </button>
//         </div>
//       </div>
//       <ToastContainer /> {/* Toast Container to show success/error messages */}
//     </div>
  
//   </>
//   );
// };

// export default Login;







import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider'; // Access AuthContext
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Firebase imports
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { userLogIn, setUser } = useContext(AuthContext); // Access userLogIn and setUser from AuthContext
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; // Save the user's intended route to redirect after login

  // State to store email for later use
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Save the email value in the state
    setEmail(email);

    // Login with email and password
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user in context
        toast.success('Login successful!');
        navigate(from, { replace: true }); // Navigate to the previous route or home page
      })
      .catch((error) => {
        toast.error(`Login failed: ${error.message}`); // Show error message if login fails
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google login with popup
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user in context
        toast.success('Google login successful!');
        navigate(from, { replace: true }); // Navigate to the previous route or home page
      })
      .catch((error) => {
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="hero mt-10 ">
        <Helmet>
          <title>Lingo Bingo | Login</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
          <div className="card w-full max-w-sm shadow-2xl bg-gradient-to-tr from-blue-400 to-blue-300 p-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-8">Login</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text font-semibold text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <button type="submit" className="btn bg-blue-500 text-white w-full font-semibold text-xl">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4 text-lg font-semibold text-blue-950">
              Don’t have an account?{' '}
              <Link className="text-blue-600" to="/register">
                <button className="bg-gradient-to-r from-blue-400 to-blue-300 rounded-full px-4 py-2 text-blue-700 font-semibold">
                  Register
                </button>
              </Link>
            </p>
            <p className="text-center mt-2">
              <Link
                className="text-blue-600 font-xl text-lg"
                to="/forgot-password"
                state={{ email }} // Pass the email state to the Forgot Password page
              >
                Forgot Password?
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              className="btn bg-gradient-to-br from-blue-600 to-blue-300 w-full text-xl font-semibold text-white"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toast Container to show success/error messages */}
    </>
  );
};

export default Login;

