import React from 'react';

const SkillPengalaman = () => {
  return (
    <div className="min-h-screen bg-[#ecd9cb] text-gray-800 p-8 flex justify-center items-center">
      {/* Box Component Wrapping All Content */}
      <div className="p-6 max-w-4xl w-full bg-white rounded-xl shadow-md space-y-8">
        {/* Page Heading with Background Color */}
        <div className="bg-[#82674a] rounded-md py-4 px-2">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Skil dan Pengalaman Saya</h2>
        </div>

        {/* Skill & Experience Table */}
        <div className="mb-8">
          <div className="grid grid-cols-2 text-center border-collapse">
            <div className="font-bold py-2 px-4 bg-[#b69970] text-white border border-[#b69970]">SKIL</div>
            <div className="font-bold py-2 px-4 bg-[#b69970] text-white border border-[#b69970]">PENGALAMAN</div>

            <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">HTML</div>
            <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">Membuat CV</div>

            <div className="py-2 px-4 bg-[#a89089] border border-[#b69970]">CSS</div>
            <div className="py-2 px-4 bg-[#a89089] border border-[#b69970]">Mendesain Halaman Web</div>

            <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">JavaScript</div>
            <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">Mmebuat website portofolio pribadi</div>

            {/* <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">JavaScript</div>
            <div className="py-2 px-4 bg-[#a89089] border border-[#a89089]">Membuat Aplikasi Web Dinamis</div> */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills List */}
          <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#82674a' }}>Skill yang saya kuasai saat ini :</h3>
            <SkillProgress title="HTML" value={80} className="progress-success" />
            <SkillProgress title="CSS" value={65} className="progress-info" />
            <SkillProgress title="JavaScript" value={50} className="progress-warning" />
          </div>

          {/* Experience List */}
          <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#82674a' }}>Pengalaman Saya :</h3>
            <ul className="list-decimal list-inside text-lg space-y-4">
              <li>Membuat Website portofolio pribadi</li>
              <li>Mendesain penyewaan sepeda listrik</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-12 text-center">
          <p className="text-lg font-medium text-teal-600">Restu Atika</p>
        </div> */}
      </div>
    </div>
  );
};

// Component for Skill Progress Bar
const SkillProgress = ({ title, value, className }) => (
  <div className="mb-6">
    <p className="font-medium">{title}</p>
    <progress className={`progress ${className} w-full`} value={value} max="100"></progress>
  </div>
);

export default SkillPengalaman;
