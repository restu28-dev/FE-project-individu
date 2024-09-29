import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div
      className="navbar shadow-lg p-4"
      style={{ backgroundColor: '#82674a' }} // Mengatur warna latar belakang dengan gaya inline
    >
      {/* Kontainer utama untuk elemen navbar */}
      <div className="flex-1 flex items-center">
        {/* Logo Bundar */}
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-12 h-12 rounded-full mr-4" // Ukuran logo dan gaya bundar
        />
        <Link to="/" className="text-xl font-bold text-white">
          Curiculum Vitae
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/Aboutme" className="text-white">Aboutme</Link>
          </li>
          <li>
            <Link to="/Overview" className="text-white">Overview</Link>
          </li>
          <li>
            <Link to="/SkillPengalaman" className="text-white">Skill&Pengalaman</Link>
          </li>
          <li>
            <Link to="/Login" className="text-white">join</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
