import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTools, FaRegEye,FaHome,FaUser } from "react-icons/fa";


const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#82674a] h-screen p-4"> {/* Updated background color */}
      <h1 className="text-2xl font-bold mb-6 text-left text-white">Dashboard</h1>
      <ul className="menu p-0 text-left">
        
      <li className="mb-4">
          <Link
            to="/Dashboard/Rumah"
            className={`flex items-center font-semibold text-white ${
              location.pathname === "/Dashboard/Rumah" ? "text-[#ecd9cb]" : ""
            }`}
          >
            <FaHome className="mr-2" /> {/* Ganti ikon dengan FaHome */}
            Rumah
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/Dashboard/Tentangsaya"
            className={`flex items-center font-semibold text-white ${
              location.pathname === "/Dashboard/FAQ" ? "text-bg-[#ecd9cb]" : ""
            }`}
          >
            <FaUser className="mr-2" />
            Aboutme
          </Link>
        </li>
        
        <li className="mb-4">
          <Link
            to="/Dashboard/Ringkasan"
            className={`flex items-center font-semibold text-white ${
              location.pathname === "/Dashboard/Ringkasan" ? "text-bg-[#ecd9cb]" : ""
            }`}
          >
            <FaRegEye className="mr-2" />
            Overview
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/Dashboard/Keahlian"
            className={`flex items-center font-semibold text-white ${
              location.pathname === "/Dashboard/Keahlian" ? "text-bg-[#ecd9cb]" : ""
            }`}
          >
            <FaTools className="mr-2" />
            Skill & pengalaman
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
