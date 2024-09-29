import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="footer footer-center text-base-content rounded p-6"
      style={{ backgroundColor: '#82674a', fontSize: '0.875rem' }} // Adjusted padding and font size
    >
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-2">
        <Link to="/Home" className="link link-hover text-sm">Home</Link>
        <Link to="/Aboutme" className="link link-hover text-sm">Aboutme</Link>
        <Link to="/Overview" className="link link-hover text-sm">Overview</Link>
        <Link to="/SkillPengalaman" className="link link-hover text-sm">Skill & Pengalaman</Link>
      </nav>
      
      {/* Social Media Icons */}
      <nav>
        <div className="grid grid-flow-col gap-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>

      {/* Location Information */}
      <div className="mt-4 text-sm">
        <p>Kalibogor Sukorejo</p>
        <p>Jl. Sukorejo, Jawa Tengah, Indonesia</p>
      </div>
      
      {/* Google Maps Embed */}
      <div className="w-full lg:w-1/3 mt-4"> {/* Adjusted width for smaller size */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1979.7531435936992!2d110.05142293081231!3d-7.0671440674598545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70692f1b667493%3A0x5cf1bf31d6f9b498!2sBalai%20Dakwah%20Muhammadiyah!5e0!3m2!1sen!2sid!4v1725550820917!5m2!1sen!2sid"
          width="300"  
          height="200" 
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          title="Balai Dakwah Muhammadiyah"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
