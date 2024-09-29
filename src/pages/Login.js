import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Add your login logic here
    // For now, we'll just navigate to the /akun page

    navigate('/akun'); // Redirect to the Akun page
  };

  return (
    <div className="min-h-screen bg-[#ecd9cb] p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#82674a] text-white p-6">
          <h1 className="text-4xl font-extrabold text-center">Login</h1>
        </div>
        <div className="p-6">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-[#82674a] font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#82674a] font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-[#82674a] text-white py-2 px-4 rounded hover:bg-[#6d5738]">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Belum punya akun?{' '}
            <Link to="/register" className="text-[#82674a] font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
