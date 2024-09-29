import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div className="min-h-screen bg-[#ecd9cb] flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full">
        <div className="bg-[#82674a] text-white p-6">
          <h1 className="text-4xl font-extrabold">Tentang Saya</h1>
        </div>
        <div className="p-6">
        <p className="text-lg text-gray-700">
           Halo! Saya <strong>Restu Atika</strong>, siswi kelas 12 di <strong>SMK Muhammadiyah 04 Sukorejo</strong>, jurusan <strong>Rekayasa Perangkat Lunak (RPL)</strong>. Saya memilih jurusan ini karena tertarik dengan dunia <strong>IT</strong> dan ingin belajar lebih dalam tentang <strong>pemrograman</strong>. Bagi saya, teknologi adalah masa depan, dan saya ingin berperan aktif di dalamnya.
       </p>
        <p className="text-lg text-gray-700 mt-4">
           Selama belajar, saya sudah memiliki pengalaman dalam membuat <strong>website</strong> dan mengembangkan proyek baik di bagian <strong>frontend</strong> maupun <strong>backend</strong>. Saya selalu berusaha meningkatkan keterampilan saya agar bisa menjadi lebih baik dan siap menghadapi tantangan di dunia teknologi.
       </p>
        <p className="text-lg text-gray-700 mt-4">
           Di luar itu, saya juga suka <strong>mendengarkan musik</strong>. Bagi saya, musik adalah cara untuk melepas penat, menambah semangat, dan menjaga fokus, terutama ketika mengerjakan proyek atau belajar.
       </p>
        <p className="text-lg text-gray-700 mt-4">
           Saya sangat bersemangat untuk terus belajar dan mengembangkan kemampuan saya di bidang IT, serta berharap dapat berkontribusi di dunia teknologi di masa depan.
       </p>
          <div className="mt-6">
            {/* Tombol Hubungi Saya */}
            <Link to="/contact" className="btn btn-primary bg-[#82674a] hover:bg-[#6d4c41]">
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
