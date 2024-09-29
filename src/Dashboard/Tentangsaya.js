import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialData = {
  biodata: [
    { id: 1, key: 'Nama', value: 'Restu Atika' },
    { id: 2, key: 'Alamat', value: 'Desa Kalibogor' },
    { id: 3, key: 'Email', value: 'Prakaswaraatika@gmail.com' },
    { id: 4, key: 'NoHP', value: '083838264393' },
  ],
  pendidikan: [
    { id: 1, key: 'SD', value: 'SD NEGERI Kalibogor' },
    { id: 2, key: 'SMP', value: 'SMP MUHAMMADIYAH 04 SUKOREJO' },
    { id: 3, key: 'SMK', value: 'SMK MUHAMMADIYAH 04 SUKOREJO' },
  ],
};

const Tentangsaya = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(null);
  const [newEntry, setNewEntry] = useState({ key: '', value: '' });
  const [currentSection, setCurrentSection] = useState('biodata');
  const navigate = useNavigate();

  const getNextId = (section) => {
    return data[section].length > 0 ? Math.max(...data[section].map(item => item.id)) + 1 : 1;
  };

  const handleAdd = () => {
    setData({
      ...data,
      [currentSection]: [...data[currentSection], { id: getNextId(currentSection), ...newEntry }],
    });
    setNewEntry({ key: '', value: '' });
  };

  const handleEdit = (section, id) => {
    setEditMode({ section, id });
    const item = data[section].find(entry => entry.id === id);
    setNewEntry({ key: item.key, value: item.value });
    setCurrentSection(section);
  };

  const handleSave = () => {
    setData({
      ...data,
      [currentSection]: data[currentSection].map(item =>
        item.id === editMode.id ? { ...item, ...newEntry } : item
      ),
    });
    setEditMode(null);
    setNewEntry({ key: '', value: '' });
  };

  const handleDelete = (section, id) => {
    setData({
      ...data,
      [section]: data[section].filter(item => item.id !== id),
    });
  };

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleEditSectionChange = (section) => {
    setCurrentSection(section);
    setEditMode(null);
    setNewEntry({ key: '', value: '' });
  };

  return (
    <div className="p-6 bg-[#ecd9cb] min-h-screen flex flex-col w-full">
      <h1 className="text-3xl font-bold mb-4 text-[#82674a] text-center">Tentang Saya</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-1 mb-6 border border-gray-300 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-3 text-[#82674a] text-center">
          {editMode ? 'Edit Data' : 'Tambah Data'}
        </h2>
        <div className="flex gap-2 mb-4 justify-center">
          <select
            id="section"
            value={currentSection}
            onChange={(e) => handleEditSectionChange(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-1/3"
          >
            <option value="biodata">Biodata Pribadi</option>
            <option value="pendidikan">Pendidikan</option>
          </select>
        </div>
        <div className="flex gap-2 mb-4 justify-center">
          <input
            type="text"
            name="key"
            value={newEntry.key}
            onChange={handleChange}
            placeholder="Key"
            className="p-2 border border-gray-300 rounded-lg w-1/3"
          />
          <input
            type="text"
            name="value"
            value={newEntry.value}
            onChange={handleChange}
            placeholder="Value"
            className="p-2 border border-gray-300 rounded-lg w-1/3"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={editMode ? handleSave : handleAdd}
            className={`px-4 py-2 rounded-lg shadow-md text-white ${
              editMode ? 'bg-green-600 hover:bg-green-700' : 'bg-[#82674a] hover:bg-[#65493b]'
            }`}
          >
            {editMode ? 'Simpan' : 'Tambah'}
          </button>
          {editMode && (
            <button
              onClick={() => setEditMode(null)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
            >
              Batal
            </button>
          )}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-3 text-[#82674a] text-center">
          {currentSection === 'biodata' ? 'Biodata Pribadi Saya' : 'Pendidikan'}
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border-b border-gray-300">ID</th>
              <th className="p-2 border-b border-gray-300">Key</th>
              <th className="p-2 border-b border-gray-300">Value</th>
              <th className="p-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data[currentSection].map(item => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.key}</td>
                <td className="p-2">{item.value}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(currentSection, item.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(currentSection, item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 rounded-lg shadow-md bg-gray-500 text-white hover:bg-gray-600"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Tentangsaya;
