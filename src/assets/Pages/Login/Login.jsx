import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);

  // Redirect if already logged in
  useEffect(() => {
    if (userRole === 'buyer') navigate('/buyer-dashboard');
    if (userRole === 'seller') navigate('/seller-dashboard');
  }, [userRole, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'buyer' && email && password === 'buyer1234') {
      alert(`Logged in as Buyer`);
      localStorage.setItem('userRole', 'buyer');
      setUserRole('buyer'); // Update UI immediately
      navigate('/buyer-dashboard');
    } else if (role === 'seller' && email && password === 'seller1234') {
      alert(`Logged in as Seller`);
      localStorage.setItem('userRole', 'seller');
      setUserRole('seller'); // Update UI immediately
      navigate('/seller-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUserRole(null);
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {userRole ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome, {userRole.charAt(0).toUpperCase() + userRole.slice(1)}!
          </h2>
          <p className="mb-4">You are logged in as a {userRole}.</p>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          <div className="flex justify-center gap-4 mb-4">
            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
            <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
            <FaGithub className="text-gray-800 text-2xl cursor-pointer" />
          </div>

          <form onSubmit={handleLogin}>
            <label className="block mb-2">Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>

            <label className="block mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />

            <label className="block mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
