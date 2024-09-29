import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import 'daisyui/dist/full.css';

const initialData = {
  skil: [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
  ],
  pengalaman: [
    { id: 1, name: 'Membuat Website portofolio pribadi' },
    { id: 2, name: 'Mendesain' },
  ],
};

const Keahlian = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState(data);
  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingExperienceId, setEditingExperienceId] = useState(null);
  const navigate = useNavigate();

  const getNextId = (items) => {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (!editMode) {
      setEditableData(data);
    }
  };

  const handleSkillChange = (e, id) => {
    setEditableData({
      ...editableData,
      skil: editableData.skil.map(skill =>
        skill.id === id ? { ...skill, name: e.target.value } : skill
      ),
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setEditableData({
        ...editableData,
        skil: [...editableData.skil, { id: getNextId(editableData.skil), name: newSkill }],
      });
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (id) => {
    setEditableData({
      ...editableData,
      skil: editableData.skil.filter(skill => skill.id !== id),
    });
  };

  const handleExperienceChange = (e, id) => {
    setEditableData({
      ...editableData,
      pengalaman: editableData.pengalaman.map(exp =>
        exp.id === id ? { ...exp, name: e.target.value } : exp
      ),
    });
  };

  const handleAddExperience = () => {
    if (newExperience.trim()) {
      setEditableData({
        ...editableData,
        pengalaman: [...editableData.pengalaman, { id: getNextId(editableData.pengalaman), name: newExperience }],
      });
      setNewExperience('');
    }
  };

  const handleDeleteExperience = (id) => {
    setEditableData({
      ...editableData,
      pengalaman: editableData.pengalaman.filter(exp => exp.id !== id),
    });
  };

  const handleSave = () => {
    setData(editableData);
    setEditMode(false);
  };

  return (
    <div className="p-6 bg-[#ecd9cb] w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-[#82674a]">Keahlian</h1>

      {/* Add New Skill */}
      {editMode && (
        <div className="mb-6 bg-white shadow-lg rounded-lg p-4 border border-[#82674a] w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#82674a]">Tambah Skill</h2>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Skill baru"
            className="border border-gray-300 rounded px-2 py-1 w-full mb-4"
          />
          <button
            onClick={handleAddSkill}
            className="w-full flex items-center justify-center px-4 py-2 bg-[#82674a] text-white rounded-lg shadow-md hover:bg-[#65493b] transition"
          >
            <FaPlus className="mr-2" /> Tambah Skill
          </button>
        </div>
      )}

      {/* Skill Section */}
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#82674a]">Skill yang Saya Kuasai:</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 border border-[#82674a]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#82674a] text-white">
                <th className="p-2">Skill</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {editableData.skil.map((skill) => (
                <tr key={skill.id} className="border-b">
                  <td className="p-2">
                    {editingId === skill.id ? (
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleSkillChange(e, skill.id)}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      <Link to={`/skil/${skill.id}`}>{skill.name}</Link>
                    )}
                  </td>
                  <td className="p-2 flex space-x-2">
                    {editingId === skill.id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700"
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingId(skill.id)}
                          className="text-yellow-500 hover:text-yellow-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteSkill(skill.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FaTrash />
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

      {/* Pengalaman Section */}
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#82674a]">Pengalaman Saya:</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 border border-[#82674a]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#82674a] text-white">
                <th className="p-2">Pengalaman</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {editableData.pengalaman.map((exp) => (
                <tr key={exp.id} className="border-b">
                  <td className="p-2">
                    {editingExperienceId === exp.id ? (
                      <input
                        type="text"
                        value={exp.name}
                        onChange={(e) => handleExperienceChange(e, exp.id)}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      exp.name
                    )}
                  </td>
                  <td className="p-2 flex space-x-2">
                    {editingExperienceId === exp.id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-700"
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditingExperienceId(null)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingExperienceId(exp.id)}
                          className="text-yellow-500 hover:text-yellow-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteExperience(exp.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <FaTrash />
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

      
    </div>
  );
};

export default Keahlian;
