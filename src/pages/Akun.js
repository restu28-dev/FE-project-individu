import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserDetail = ({ label, value }) => (
  <div className="flex items-center mb-4">
    <span className="font-medium text-[#82674a] w-32">{label}:</span>
    <span>{value}</span>
  </div>
);

const Akun = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogout = () => {
    // Tutup konfirmasi logout
    setShowLogoutConfirmation(false);

    // Set notifikasi
    setShowNotification(true);

    // Tunda selama 1 detik sebelum navigasi
    setTimeout(() => {
      navigate('/Home.js');
    }, 1000); // 1 detik
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-[#ecd9cb] p-8">
      {/* Header Section */}
      <div className="bg-[#82674a] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center">Akun Saya</h1>
      </div>

      {/* User Details Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#333] mb-6">Informasi Profil</h2>
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#82674a]">
            <img src="path-to-your-profile-image.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <UserDetail label="Nama" value="Restu Atika" />
            <UserDetail label="Alamat" value="Desa Kalibogor" />
            <UserDetail label="Email" value="Prakaswaraatika@gmail.com" />
            <UserDetail label="No HP/WA" value="083838264393" />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/profil">
            <button className="bg-[#82674a] text-white py-2 px-4 rounded hover:bg-[#6d5738]">
              Update Profil
            </button>
          </Link>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#333] mb-6">Pengaturan Akun</h2>
        <div className="space-y-4">
          <Link to="/change-password" className="text-[#82674a] font-semibold hover:underline">Ganti Password</Link>
          <Link to="/privacy-settings" className="text-[#82674a] font-semibold hover:underline">Pengaturan Privasi</Link>
          <Link to="/notification-settings" className="text-[#82674a] font-semibold hover:underline">Pengaturan Notifikasi</Link>
          <Link to="/security-settings" className="text-[#82674a] font-semibold hover:underline">Opsi Keamanan</Link>
        </div>
      </div>

      {/* Logout Section */}
      <div className="bg-white p-8 mt-8 rounded-lg shadow-md">
        <div className="flex justify-center">
          <button
            onClick={handleLogoutClick}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi Logout</h2>
            <p className="mb-4">Apakah Anda yakin ingin keluar dari akun Anda?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleLogout}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Iya
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Anda telah keluar dari akun.
        </div>
      )}
    </div>
  );
};

export default Akun;
