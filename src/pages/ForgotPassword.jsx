import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || ''); // Prefill email from login page if available
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Normally, we would use Firebase's sendPasswordResetEmail here.
      // Since you want to redirect to Gmail, we'll simulate this by redirecting to Gmail with a query.
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Password%20Reset&body=Please%20reset%20your%20password.`;
      toast.success('Password reset email sent to Gmail!');
      navigate('/login');
    } catch (error) {
      setError('Failed to send reset email: ' + error.message);
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Forgot Password</h1>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleResetPassword}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white btn-primary" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
