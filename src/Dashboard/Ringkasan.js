// src/components/Rigkasan.js
import React, { useState } from 'react';

const Rigkasan = () => {
  const [data, setData] = useState([
    { id: 1, text: 'Halo! Saya Restu Atika. Sekarang saya sekolah di SMK Muhammadiyah 04 Sukorejo, ambil jurusan Rekayasa Perangkat Lunak (RPL). Kenapa saya pilih jurusan ini? Karena saya pengen banget ngerti dunia IT dan mendalami pemrograman. Selain itu, saya juga suka dengerin musik. Musik bikin saya rileks dan selalu jadi teman terbaik saat saya lagi belajar atau butuh semangat.' },
  ]);
  const [editData, setEditData] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    const nextId = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
    setData([...data, { id: nextId, text: 'New Data' }]);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const item = data.find(d => d.id === id);
    setEditData(item ? item.text : '');
  };

  const handleSave = () => {
    setData(data.map(d => (d.id === editingId ? { ...d, text: editData } : d)));
    setEditingId(null);
    setEditData('');
  };

  const handleDelete = (id) => {
    setData(data.filter(d => d.id !== id));
  };

  return (
    <div className="p-6 bg-[#ecd9cb] min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#82674a]">Dashboard</h1>
        <p className="text-[#82674a]">Welcome to the dashboard!</p>
      </div>
      <div className="mb-6">
        <button 
          onClick={handleAdd} 
          className="px-4 py-2 bg-[#82674a] text-white rounded-lg shadow-md hover:bg-[#65493b] transition"
        >
          Add New
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 border border-[#82674a]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#82674a] text-white">
              <th className="p-4">ID</th>
              <th className="p-4">Text</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="p-4">{item.id}</td>
                <td className="p-4">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editData}
                      onChange={(e) => setEditData(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#82674a]"
                    />
                  ) : (
                    item.text
                  )}
                </td>
                <td className="p-4 flex gap-2">
                  {editingId === item.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rigkasan;
