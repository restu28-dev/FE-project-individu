import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Masuk = ({ onMasuk }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi autentikasi sederhana
    if (email === 'Restuaatika@gmail.com' && password === '12345678') {
      onMasuk(); // Memanggil fungsi onMasuk untuk set status Masuk
      navigate('/dashboard'); // Redirect ke halaman navbar
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Masuk</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full bg-purple-500">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Masuk;
