import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Logika untuk registrasi pengguna bisa ditambahkan di sini

    // Simpan notifikasi di sessionStorage
    sessionStorage.setItem('registrationNotification', 'Selamat! Data Anda telah berhasil disimpan.');

    // Arahkan ke halaman Akun.js
    navigate('/akun');
  };

  return (
    <div className="min-h-screen bg-[#ecd9cb] p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#82674a] text-white p-6">
          <h1 className="text-4xl font-extrabold text-center">Register</h1>
        </div>
        <div className="p-6">
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-[#82674a] font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#82674a] font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#82674a] font-medium mb-2">Konfirmasi Password</label>
              <input
                type="password"
                placeholder="Konfirmasi password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-[#82674a] text-white py-2 px-4 rounded hover:bg-[#6d5738]">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Sudah punya akun?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#82674a] font-semibold"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
