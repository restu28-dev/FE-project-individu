import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

const initialHomeData = {
  title: "Restu Atika",
  description:
    "Haiii, Saya adalah siswi kelas 12 SMK MUHAMMADIYAH 04 SUKOREJO saya dari jurusan RPL/PPLG. Hobi saya adalah membaca, dan alasan saya memilih jurusan RPL adalah saya ingin belajar tentang dunia pemrograman.",
  imageUrl: "/restu.jpg", // Ganti dengan path gambar yang sesuai
};

const Rumah = () => {
  const [homeData, setHomeData] = useState(initialHomeData);
  const [editMode, setEditMode] = useState(false);
  const [editableHomeData, setEditableHomeData] = useState(homeData);
  const [previewImage, setPreviewImage] = useState(homeData.imageUrl);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setHomeData(editableHomeData);
    }
  };

  const handleChange = (e, key) => {
    setEditableHomeData({
      ...editableHomeData,
      [key]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setEditableHomeData({
          ...editableHomeData,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setHomeData(editableHomeData);
    setEditMode(false);
  };

  const handleBackClick = () => {
    if (
      editMode &&
      !window.confirm("Perubahan belum disimpan. Yakin ingin kembali?")
    ) {
      return;
    }
    navigate("/Dashboard/Rumah");
  };

  return (
    <div className="p-8 bg-[#ecd9cb] w-full flex justify-center items-center">
      <div className="bg-white shadow-md rounded-3xl p-6 border border-[#82674a] w-full w-80 h-73"> {/* Ubah max-w-3xl menjadi max-w-md */}
        <h1 className="text-3xl font-bold mb-4 text-center">Halaman Home</h1>
        <div className="mb-8">
          {/* <h2 className="text-2xl font-semibold mb-4 ">Konten Halaman Home</h2> */}
          
          {/* Judul */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Judul:</label>
            {editMode ? (
              <input
                type="text"
                value={editableHomeData.title}
                onChange={(e) => handleChange(e, "title")}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <h2 className="text-xl">{homeData.title}</h2>
            )}
          </div>

          {/* Deskripsi */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Deskripsi:</label>
            {editMode ? (
              <textarea
                value={editableHomeData.description}
                onChange={(e) => handleChange(e, "description")}
                className="border rounded px-2 py-1 w-full"
                rows="4"
              />
            ) : (
              <p>{homeData.description}</p>
            )}
          </div>

          {/* Gambar */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Gambar:</label>
            {editMode ? (
              <input
                type="file"
                onChange={handleImageChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <img
                src={homeData.imageUrl}
                alt="Home"
                className="max-w-xs max-h-64 rounded-lg"
              />
            )}
            {editMode && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-4 max-w-xs max-h-64 rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Tombol Simpan dan Kembali */}
        <div className="flex space-x-4">
          <button onClick={handleEditClick} className="px-4 py-2 bg-[#82674a] text-white rounded-lg shadow-md hover:bg-[#7d5a3f] transition">
            {editMode ? "Simpan" : "Edit"}
          </button>
          <button onClick={handleBackClick} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rumah;
