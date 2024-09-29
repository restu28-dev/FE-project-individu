import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman pesan
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#ecd9cb] flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full">
        {/* Header Section */}
        <div className="bg-[#82674a] text-white p-6 text-center">
          <h1 className="text-4xl font-extrabold">Hubungi Saya</h1>
        </div>

        {/* Deskripsi Tengah */}
        <div className="p-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Jika Anda ingin bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui form di bawah ini, atau langsung melalui{' '}
            <strong>prakaswaraatika@gmail.com</strong>
          </p>
          
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-semibold mb-2">Nama</label>
              <input
                type="text"
                name="name"
                placeholder="Masukkan nama Anda"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
              <textarea
                name="message"
                placeholder="Tulis pesan Anda"
                className="textarea textarea-bordered w-full"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-primary bg-[#82674a] hover:bg-[#6d4c41] w-full" type="submit">
                Kirim Pesan
              </button>
            </div>
          </form>

          {/* Sosial Media Section */}
          <div className="mt-8">
            <p className="text-lg font-semibold text-gray-700">Atau hubungi saya melalui media sosial ini:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.bing.com/ck/a?!&&p=c38cc3b425a94ee5JmltdHM9MTcyNTkyNjQwMCZpZ3VpZD0wOTc4NzNmMC05ZjdmLTY4MjYtMGRmYi02MjMyOWU3ZjY5Y2EmaW5zaWQ9NTE4NQ&ptn=3&ver=2&hsh=3&fclid=097873f0-9f7f-6826-0dfb-62329e7f69ca&psq=facebook+smk+muhammadiyah+04+sukorejo&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy8zMzUxMjM1ODQyMDI0NzEv&ntb=1" target="_blank" rel="noopener noreferrer" className="text-[#4267B2] text-3xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/febrianirestu__?igsh=MW5yZ3k5Z21nYnludw==" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-3xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
