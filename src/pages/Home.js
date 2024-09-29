import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Inline styles for button
  const buttonStyle = {
    backgroundColor: '#82674a',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#6f573c',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-r from-[#f8f0e3] via-[#e2d9d0] to-[#e6dee9] flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 lg:px-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-[#4a3c2a] mb-4">Haii Guys!!!</h1>
            <h2 className="text-3xl font-semibold mb-6 text-[#6d4c41]">SAYA RESTU ATIKA</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Halo! Saya Restu Atika, seorang siswi kelas 11 dari SMK Muhammadiyah 04 Sukorejo dengan jurusan Rekayasa Perangkat Lunak (RPL). Saya adalah seorang penggemar teknologi dan dunia pemrograman, dan saya sangat antusias untuk menjelajahi setiap aspek dari bidang ini.
            </p>
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = buttonStyle.boxShadow}
              onClick={() => navigate('/overview')}
            >
              Selengkapnya
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 border-4 border-[#82674a] rounded-full shadow-lg overflow-hidden">
              <img src="restu.jpg" alt="profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
