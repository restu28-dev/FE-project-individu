import React from 'react';

const Aboutme = () => {
  return (
    <div className="min-h-screen bg-[#ecd9cb] p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#82674a] text-white p-6">
          <h1 className="text-4xl font-extrabold text-center">Biodata</h1>
        </div>
        <div className="p-6">
          {/* Biodata Pribadi */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#333] mb-4">Biodata Pribadi Saya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">Nama:</span>
                  <span>Restu Atika</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">Alamat:</span>
                  <span>Desa Kalibogor</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">Email:</span>
                  <span>Prakaswaraatika@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">No HP/WA:</span>
                  <span>083838264393</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#333] mb-4">Pendidikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">SD:</span>
                  <span>SD NEGERI Kalibogor</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">SMP:</span>
                  <span>SMP MUHAMMADIYAH 04 SUKOREJO</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-[#82674a] w-32">SMK :</span>
                  <span>SMK MUHAMMADIYAH 04 SUKOREJO</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
